const assert = require('chai').assert;
const capt = require('../dist/capt-module');
describe('currentTimestamp', function(){
  it('should return an integer.',function(){
    assert.typeOf(capt.currentTimestamp(),'number');
  });
});
