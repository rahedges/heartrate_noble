var util = require('util');
var bleno = require('../../index');

var BlenoPrimaryService = bleno.PrimaryService;
var BlenoCharacteristic = bleno.Characteristic;
var BlenoDescriptor = bleno.Descriptor;

//var DeviceInformationService = require('./blenoDeviceInformationService');
//var deviceInformationService = new DeviceInformationService(treadmill);

var WorkoutStatsService =require('./blenoWorkoutStatsService.js')
var workoutStatsService = new WorkoutStatsService();

var UserService =require('./blenoUserService.js')
var userService = new UserService();


console.log('main');


bleno.on('stateChange', function(state) {
  console.log('on -> stateChange: ' + state);
  if (state === 'poweredOn') {
    bleno.startAdvertising('Workout 48:55', ['9dc17002-8855-11e3-979a-78acc0b87777',
                                            '9dc17003-8855-11e3-979a-78acc0b87777']);

  } else {
    bleno.stopAdvertising();
  }
});

bleno.on('advertisingStart', function(error) {
  console.log('on -> advertisingStart: ' + (error ? 'error ' + error : 'success'));

  if (!error) {

      bleno.setServices([workoutStatsService,userService]);
  }
});

bleno.on('advertisingStop', function() {
  console.log('on -> advertisingStop');
});

bleno.on('servicesSet', function() {
  console.log('on -> servicesSet');
});
