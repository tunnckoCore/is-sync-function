/*!
 * is-sync-function <https://github.com/tunnckoCore/is-sync-function>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var fs = require('fs')
var test = require('assertit')
var isSyncFunction = require('./index')

test('is-sync-function:', function () {
  test('should return true for synchronous functions', function (done) {
    test.equal(isSyncFunction(fs.readFileSync), true)
    test.equal(isSyncFunction(fs.renameSync), true)
    test.equal(isSyncFunction(fs.statSync), true)
    test.equal(isSyncFunction(fs.chownSync), true)
    test.equal(isSyncFunction(JSON.stringify), true)
    test.equal(isSyncFunction(JSON.parse), true)
    done()
  })
  test('should return false for async functions', function (done) {
    test.equal(isSyncFunction(fs.readFile), false)
    test.equal(isSyncFunction(fs.rename), false)
    test.equal(isSyncFunction(fs.stat), false)
    test.equal(isSyncFunction(fs.chown), false)
    done()
  })
})
