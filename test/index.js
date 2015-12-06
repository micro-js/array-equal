/**
 * Imports
 */

var arrayEqual = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.equal(arrayEqual([1, 2], [1, 2]), true)
  t.equal(arrayEqual([1, 2], [1, 2, 3]), false)
  t.equal(arrayEqual([], [1]), false)
  t.equal(arrayEqual([1], [2]), false)
  t.end()
})
