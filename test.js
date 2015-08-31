'use strict'

var test = require('tape')
var greatest = require('./')

test(function (t) {
  t.equal(greatest([4, 5, 2, 10]), 10)
  t.equal(greatest(4, 5, 2, 10), 10)
  t.end()
})
