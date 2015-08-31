'use strict'

var toArray = require('to-array')
var sort = require('sort-on')

module.exports = function greatest (values) {
  if (!Array.isArray(values)) {
    values = toArray(arguments)
  }

  return sort(values).reverse()[0]
}
