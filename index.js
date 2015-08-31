'use strict'

var toArray = require('to-array')

module.exports = function greatest (values) {
  if (!Array.isArray(values)) {
    values = toArray(arguments)
  }

  return values.slice().sort()[0]
}
