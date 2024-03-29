var async = require('async');
var noble = require('../index');
var debug = require('debug')
var Heartratemonitor=require('../../heartrate/hrMonitor')

var pUuid = new String(process.argv[2]);
var peripheralUuid = new String()
peripheralUuid = pUuid.replace(/:/g,'').toLowerCase();
debug(typeof(peripheralUuid))
debug("periperherUUID: " + peripheralUuid)

var HEARTRATE_SERVICE_UUID='180d';
var HEARTRATE_CONFIG_UUID='2902';
var HEARTRATE_VAL_UUID='2a37';


noble.on('stateChange', function(state) {
  if (state === 'poweredOn') {
console.log("Scanning")    
noble.startScanning();
  } else {
    noble.stopScanning();
  }
});

noble.on('discover', function(peripheral) {
console.log("Discovered: " + peripheral.uuid)
  if (peripheral.uuid === peripheralUuid) {
    noble.stopScanning();

    console.log('peripheral with UUID ' + peripheralUuid + ' found');
    var advertisement = peripheral.advertisement;

    var localName = advertisement.localName;
    var txPowerLevel = advertisement.txPowerLevel;
    var manufacturerData = advertisement.manufacturerData;
    var serviceData = advertisement.serviceData;
    var serviceUuids = advertisement.serviceUuids;

    if (localName) {
      console.log('  Local Name        = ' + localName);
    }

    if (txPowerLevel) {
      console.log('  TX Power Level    = ' + txPowerLevel);
    }

    if (manufacturerData) {
      console.log('  Manufacturer Data = ' + manufacturerData.toString('hex'));
    }

    if (serviceData) {
      console.log('  Service Data      = ' + serviceData);
    }

    if (localName) {
      console.log('  Service UUIDs     = ' + serviceUuids);
    }

    console.log();

   // explore(peripheral);
    discoverHeartrate(peripheral)
  }
});

function discoverHeartrate(peripheral){

//    peripheral.on('disconnect', function() {
//      process.exit(0);
//    });

    peripheral.connect(function(error) {
      var serviceUUIDs=[HEARTRATE_SERVICE_UUID];
      var characteristicUUIDs=[HEARTRATE_CONFIG_UUID,HEARTRATE_VAL_UUID];

       peripheral.discoverServices(
          serviceUUIDs, function(error, services)
          {
              var serviceIndex = 0;
              console.log("services matched " +services.length)
               if(services.length===1) { //found hr monitor

                   console.log("getting hr serivices and char")
                   var heartrateMonitor=new Heartratemonitor(peripheral)
                   async.series([
                     function(callback){
                        peripheral.disconnect(callback);
                     },
                     function(callback){
                       console.log("connect")
                       heartrateMonitor.connect(callback);
                     },
                     function(callback){
                        heartrateMonitor.discoverHeartrateService(callback);
                     },
                     function(callback){
                         console.log(heartrateMonitor.uuid)
                         console.log(heartrateMonitor._services)
                         console.log(heartrateMonitor._characteristics)

                      },
                      function(callback){
                        heartrateMonitor.disconnect(callback);
                        process.exit(0)
                      }
                    ]);
               }

          });
     });



}

function explore(peripheral) {
  console.log('services and characteristics:');

  peripheral.on('disconnect', function() {
    process.exit(0);
  });

  peripheral.connect(function(error) {
    peripheral.discoverServices([], function(error, services) {
      var serviceIndex = 0;

      async.whilst(
        function () {
          return (serviceIndex < services.length);
        },
        function(callback) {
          var service = services[serviceIndex];
          var serviceInfo = service.uuid;

          if (service.name) {
            serviceInfo += ' (' + service.name + ')';
          }
          console.log(serviceInfo);


          if(service.uuid==='180d'){
              console.log("HEART.........................")
	        }

              service.discoverCharacteristics([], function(error, characteristics) {
                var characteristicIndex = 0;

                async.whilst(
                  function () {
                    return (characteristicIndex < characteristics.length);
                  },
                  function(callback) {
                    var characteristic = characteristics[characteristicIndex];
                    var characteristicInfo = '  ' + characteristic.uuid;

                    if (characteristic.name) {
                      characteristicInfo += ' (' + characteristic.name + ')';
                    }

                    async.series([
                      function(callback) {
                        characteristic.discoverDescriptors(function(error, descriptors) {
                          async.detect(
                            descriptors,
                            function(descriptor, callback) {
                              return callback(descriptor.uuid === '2901');
                            },
                            function(userDescriptionDescriptor){
                              if (userDescriptionDescriptor) {
                                userDescriptionDescriptor.readValue(function(error, data) {
                                  characteristicInfo += ' (' + data.toString() + ')';
                                  callback();
                                });
                              } else {
                                callback();
                              }
                            }
                          );
                        });
                      },
                      function(callback) {
                            characteristicInfo += '\n    properties  ' + characteristic.properties.join(', ');

                        if (characteristic.properties.indexOf('read') !== -1) {
                          characteristic.read(function(error, data) {
                            if (data) {
                              var string = data.toString('ascii');

                              characteristicInfo += '\n    value       ' + data.toString('hex') + ' | \'' + string + '\'';
                            }
                            callback();
                          });
                        } else {
                          callback();
                        }
                      },
                      function() {
                        console.log(characteristicInfo);
                        characteristicIndex++;
                        callback();
                      }
                    ]);
                  },
                  function(error) {
                    serviceIndex++;
                    callback();
                  }
                );

              });

        },
        function(){
                console.log("Looking for Heartrate service in " +services.length + "service" )
            for (var j =0;j<services.length; j++){
                console.log(services[j].uuid)
                if(services[j].uuid==='180d'){
                    console.log("Heartrate service found (service " + j+" )")
                    var hrService=services[j]
                    console.log(hrService.uuid)
                }
             }
         },
        function (err) {
          peripheral.disconnect();
        }
      );
    });
  });
}

