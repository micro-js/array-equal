/**
 * arrayEqual
 */

function arrayEqual (a, b) {
  var aLen = a.length
  var bLen = b.length

  if (aLen === bLen) {
    for (var i = 0; i < aLen; ++i) {
      if (a[i] !== b[i]) {
        return false
      }
    }

    return true
  }

  return false
}

/**
 * Exports
 */

module.exports = arrayEqual
