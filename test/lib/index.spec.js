var index = require('../../lib/index');
var assert = require('../helper').assert;

describe('index', function() {

  it('provides the API', function() {
    assert.isTrue(index(), 'things work');
  });

});
