const assert = require('chai').assert;
const capt = require('../dist/capt-module');
describe('dateFromTimestamp', function(){
  it('should return a string.',function(){
    assert.typeOf(capt.dateFromTimestamp(0),'string');
  });
});
