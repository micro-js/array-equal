/**
 * Imports
 */

var arrayEqual = require('..')
var assert = require('assert')

/**
 * Tests
 */

describe('arrayEqual', function () {
  it('should work', function () {
    assert.equal(arrayEqual([1, 2], [1, 2]), true)
    assert.equal(arrayEqual([1, 2], [1, 2, 3]), false)
    assert.equal(arrayEqual([], [1]), false)
    assert.equal(arrayEqual([1], [2]), false)
  })
})
