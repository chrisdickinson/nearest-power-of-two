var test = require('tape')

var npot = require('./npot.js')

test('nearest power of two?', function(assert) {
  assert.equal(npot(2), 2)
  assert.equal(npot(3), 4)
  assert.equal(npot(Math.pow(2, 32)), Math.pow(2, 32))
  assert.equal(npot(Math.pow(2, 32) + 1), undefined)
  assert.end()
})
