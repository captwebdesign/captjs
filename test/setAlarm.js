const assert = require('chai').assert;
const capt = require('../dist/capt-module');
describe('setAlarm', function(){
  it('should return true.',function(){
    assert.isOk(capt.setAlarm(1000,function(){}),true);
  });
});
