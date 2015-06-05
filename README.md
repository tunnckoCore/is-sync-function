# is-sync-function [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Opposite of `is-async-function`. Check that given function is synchronous.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i is-sync-function --save
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var isSyncFunction = require('is-sync-function')

var fs = require('fs')
isSyncFunction(fs.readFileSync) //=> true
isSyncFunction(fs.renameSync) //=> true
isSyncFunction(fs.chownSync) //=> true
isSyncFunction(fs.statSync) //=> true

isSyncFunction(fs.readFile) //=> false
isSyncFunction(fs.rename) //=> false
isSyncFunction(fs.chown) //=> false
isSyncFunction(fs.stat) //=> false

isSyncFunction(JSON.stringify) //=> true
isSyncFunction(JSON.parse) //=> true
```


## Related
- [always-callback](https://github.com/tunnckocore/always-callback): Create callback api for given sync function. Guarantee that given function (sync or async, no matter) will always have callback api.
- [is-async-function](https://github.com/tunnckocore/is-async-function): Check that given function is async (callback) function or not. Trying to guess that based on check if `callback` or `cb` exists in function arguments.
- [is-empty-function](https://github.com/tunnckoCore/is-empty-function): Checks the given function (or fn.toString()) is with empty body - dont have body.
- [is-hexcolor](https://github.com/tunnckocore/is-hexcolor): Check that given value is valid hex color, using `hex-color-regex` - the best regex for matching hex color values
- [is-ansi](https://github.com/tunnckocore/is-ansi): Check that given string contain ANSI color codes, without CLI
- [make-callback](https://github.com/tunnckocore/make-callback): Make synchronous function to support callback api


## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/is-sync-function/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/is-sync-function
[npmjs-img]: https://img.shields.io/npm/v/is-sync-function.svg?label=is-sync-function

[license-url]: https://github.com/tunnckoCore/is-sync-function/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/is-sync-function
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/is-sync-function.svg

[travis-url]: https://travis-ci.org/tunnckoCore/is-sync-function
[travis-img]: https://img.shields.io/travis/tunnckoCore/is-sync-function.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/is-sync-function
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/is-sync-function.svg

[david-url]: https://david-dm.org/tunnckoCore/is-sync-function
[david-img]: https://img.shields.io/david/tunnckoCore/is-sync-function.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/send%20me-message-green.svg
