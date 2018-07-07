const assert = require('chai').assert;
const capt = require('../dist/capt-module');
describe('cancelAlarm', function(){
  it('should return true.',function(){
    assert.equal(true,capt.cancelAlarm(),'number');
  });
});
