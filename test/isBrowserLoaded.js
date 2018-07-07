const assert = require('chai').assert;
const capt = require('../dist/capt-module');
describe('isBrowserLoaded', function(){
  it('should return a boolean.',function(){
    var document = { readyState: 'complete' };
    assert.typeOf(capt.isBrowserLoaded(document),'boolean');
  });
});
