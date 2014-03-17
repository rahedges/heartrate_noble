var util = require('util');

var bleno = require('../../index');



var BlenoPrimaryService = bleno.PrimaryService;
var BlenoCharacteristic = bleno.Characteristic;
var BlenoDescriptor = bleno.Descriptor;



var treadmill=new Object
treadmill.serialNumber= '0123456';
treadmill.revisionNumber= '54321';

var DeviceInformationService = require('./device-information-service');
var deviceInformationService = new DeviceInformationService(treadmill);

var WorkoutStatsService =require('./workoutStatsService.js')
var workoutStatsService = new WorkoutStatsService();


console.log('bleno');







bleno.on('stateChange', function(state) {
  console.log('on -> stateChange: ' + state);
//var uuid='01234567890A-BCDEF012-3456-789A-BCDE';
//var uuid='0d27f4100000-DEADBEEF-0BAD-F00D-FEED'
  if (state === 'poweredOn') {
    bleno.startAdvertising('WorkoutStats', ['0d27f4100000DEADBEEF0BADF00DFEED']);
  } else {
    bleno.stopAdvertising();
  }
});

bleno.on('advertisingStart', function(error) {
  console.log('on -> advertisingStart: ' + (error ? 'error ' + error : 'success'));

  if (!error) {
//      bleno.setServices([deviceInformationService,workoutStatsService]);
      bleno.setServices([workoutStatsService]);
  }
});

bleno.on('advertisingStop', function() {
  console.log('on -> advertisingStop');
});

bleno.on('servicesSet', function() {
  console.log('on -> servicesSet');
});
