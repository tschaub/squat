var util = require('../../lib/util');
var assert = require('../helper').assert;

describe('util', function() {

  it('provides utility', function() {
    assert.isTrue(util(), 'things work');
  });

});
