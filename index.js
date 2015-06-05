/*!
 * is-sync-function <https://github.com/tunnckoCore/is-sync-function>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var isAsyncFn = require('is-async-function')

module.exports = function isSyncFunction (fn) {
  return !isAsyncFn(fn)
}
