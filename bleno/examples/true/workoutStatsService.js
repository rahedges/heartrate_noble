var util = require('util');

var bleno = require('../../index');

var BlenoPrimaryService = bleno.PrimaryService;
var BlenoCharacteristic = bleno.Characteristic;
var BlenoDescriptor = bleno.Descriptor;

console.log('bleno');

var WTimeCharacteristic = function() {
  WTimeCharacteristic.super_.call(this, {
   uuid: '0d27f4100001DEADBEEF0BADF00DFEED',
   properties: ['read'],
   value: '400',
   descriptors: [
    new BlenoDescriptor({
	uuid: '2901',
	value: 'Workout Time'
	    })
   ]
  });
};
util.inherits(WTimeCharacteristic, BlenoCharacteristic);

var HorizontalCharacteristic = function() {
  HorizontalCharacteristic.super_.call(this, {
   uuid: '0d27f4100002DEADBEEF0BADF00DFEED',
   properties: ['read'],
   value: new Buffer('02'),
   descriptors: [
    new BlenoDescriptor({
	uuid: '2901',
	value: 'Horizontal Distance'
	    })
   ]
  });
};
util.inherits(HorizontalCharacteristic, BlenoCharacteristic);

var VerticalCharacteristic = function() {
  VerticalCharacteristic.super_.call(this, {
   uuid: '0d27f4100003DEADBEEF0BADF00DFEED',
   properties: ['read'],
   value: new Buffer('03'),
   descriptors: [
    new BlenoDescriptor({
	uuid: '2901',
	value: 'Vertical Distance'
	    })
   ]
  });
};
util.inherits(VerticalCharacteristic, BlenoCharacteristic);



var CaloriesCharacteristic = function() {
  CaloriesCharacteristic.super_.call(this, {
   uuid: '0d27f4100004DEADBEEF0BADF00DFEED',
   properties: ['read'],
   value: new Buffer('04'),
   descriptors: [
    new BlenoDescriptor({
	uuid: '2901',
	value: 'Calories'
	    })
   ]
  });
};
util.inherits(CaloriesCharacteristic, BlenoCharacteristic);

var SpeedCharacteristic = function() {
  SpeedCharacteristic.super_.call(this, {
   uuid: '0d27f4100005DEADBEEF0BADF00DFEED',
   properties: ['read'],
   value: new Buffer('05'),
   descriptors: [
    new BlenoDescriptor({
	uuid: '2901',
	value: 'Speed'
	    })
   ]
  });
};
util.inherits(SpeedCharacteristic, BlenoCharacteristic);


var PaceCharacteristic = function() {
  PaceCharacteristic.super_.call(this, {
   uuid: '0d27f4100006DEADBEEF0BADF00DFEED',
   properties: ['read'],
   value: new Buffer('06'),
   descriptors: [
    new BlenoDescriptor({
	uuid: '2901',
	value: 'Pace'
	    })
   ]
  });
};
util.inherits(PaceCharacteristic, BlenoCharacteristic);


var CadenceCharacteristic = function() {
  CadenceCharacteristic.super_.call(this, {
   uuid: '0d27f4100007DEADBEEF0BADF00DFEED',
   properties: ['read'],
   value: new Buffer('07'),
   descriptors: [
    new BlenoDescriptor({
	uuid: '2901',
	value: 'Cadence'
	    })
   ]
  });
};
util.inherits(CadenceCharacteristic, BlenoCharacteristic);

var GradeCharacteristic = function() {
  GradeCharacteristic.super_.call(this, {
   uuid: '0d27f4100008DEADBEEF0BADF00DFEED',
   properties: ['read'],
   value: new Buffer('08'),
   descriptors: [
    new BlenoDescriptor({
    uuid: '2901',
    value: 'Grade'
        })
   ]
  });
};
util.inherits(GradeCharacteristic, BlenoCharacteristic);

var WeightCharacteristic = function() {
  WeightCharacteristic.super_.call(this, {
   uuid: '0d27f4100009DEADBEEF0BADF00DFEED',
   properties: ['read'],
   value: new Buffer('185'),
   descriptors: [
    new BlenoDescriptor({
    uuid: '2901',
    value: 'Weight'
        })
   ]
  });
};
util.inherits(WeightCharacteristic, BlenoCharacteristic);

var AgeCharacteristic = function() {
  AgeCharacteristic.super_.call(this, {
   uuid: '0d27f410000ADEADBEEF0BADF00DFEED',
   properties: ['read'],
   value: new Buffer('49'),
   descriptors: [
    new BlenoDescriptor({
    uuid: '2901',
    value: 'Age'
        })
   ]
  });
};
util.inherits(AgeCharacteristic, BlenoCharacteristic);

var GenderCharacteristic = function() {
  GenderCharacteristic.super_.call(this, {
   uuid: '0d27f410000BDEADBEEF0BADF00DFEED',
   properties: ['read'],
   value: new Buffer('Male'),
   descriptors: [
    new BlenoDescriptor({
    uuid: '2901',
    value: 'Gender'
        })
   ]
  });
};
util.inherits(GenderCharacteristic, BlenoCharacteristic);

var HearRateCharacteristic = function() {
  HearRateCharacteristic.super_.call(this, {
   uuid: '0d27f410000CDEADBEEF0BADF00DFEED',
   properties: ['read'],
   value: new Buffer('124'),
   descriptors: [
    new BlenoDescriptor({
    uuid: '2901',
    value: 'Heart Rate'
        })
   ]
  });
};
util.inherits(HearRateCharacteristic, BlenoCharacteristic);

var METsCharacteristic = function() {
  METsCharacteristic.super_.call(this, {
   uuid: '0d27f410000DDEADBEEF0BADF00DFEED',
   properties: ['read'],
   value: new Buffer('0D'),
   descriptors: [
    new BlenoDescriptor({
    uuid: '2901',
    value: 'METs'
        })
   ]
  });
};
util.inherits(METsCharacteristic, BlenoCharacteristic);

var PowerCharacteristic = function() {
  PowerCharacteristic.super_.call(this, {
   uuid: '0d27f410000EDEADBEEF0BADF00DFEED',
   properties: ['read'],
   value: new Buffer('0E'),
   descriptors: [
    new BlenoDescriptor({
    uuid: '2901',
    value: 'Power'
        })
   ]
  });
};
util.inherits(PowerCharacteristic, BlenoCharacteristic);


var HRAvgCharacteristic = function() {
  HRAvgCharacteristic.super_.call(this, {
   uuid: '0d27f410000FDEADBEEF0BADF00DFEED',
   properties: ['read'],
   value: new Buffer('109'),
   descriptors: [
    new BlenoDescriptor({
    uuid: '2901',
    value: 'Heart Rate Avg'
        })
   ]
  });
};
util.inherits(HRAvgCharacteristic, BlenoCharacteristic);


var HRMaxCharacteristic = function() {
  HRMaxCharacteristic.super_.call(this, {
   uuid: '0d27f4100007DEADBEEF0BADF00DFEED',
   properties: ['read'],
   value: new Buffer('156'),
   descriptors: [
    new BlenoDescriptor({
    uuid: '2901',
    value: 'Heart Rate Max'
        })
   ]
  });
};
util.inherits(HRMaxCharacteristic, BlenoCharacteristic);

function WorkoutStatsService() {
    WorkoutStatsService.super_.call(this, {
    uuid: '0d27f4100000DEADBEEF0BADF00DFEED',
    characteristics: [
     new WTimeCharacteristic(),
     new HorizontalCharacteristic(),
     new VerticalCharacteristic(),
     new CaloriesCharacteristic(),
     new SpeedCharacteristic(),
     new PaceCharacteristic(),
     new CadenceCharacteristic(),
     new GradeCharacteristic(),
     new WeightCharacteristic(),
     new AgeCharacteristic(),
     new GenderCharacteristic(),
     new HearRateCharacteristic(),
     new METsCharacteristic(),
     new PowerCharacteristic(),
     new HRAvgCharacteristic(),
     new HRMaxCharacteristic(),
    ]
  });
}

util.inherits(WorkoutStatsService, BlenoPrimaryService);

module.exports =WorkoutStatsService;
