# Dota2 Match Ticker [![Build Status](https://img.shields.io/travis/Yu1989/submail-sms/master.svg?style=flat-square)](https://travis-ci.org/Yu1989/submail-sms)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

Source code for [Dota2 Match Ticker](http://dota.jiangyu.rocks) - an single page site with Dota2 match schedules, and nothing else.

[Dota2赛程表](http://dota.jiangyu.rocks)的源码.

-----

A minimal project built with big names:
- **Babel** for writing ES7
- **Koa 2** as server framework
- **React** as front-end framework
- **Webpack** for packing assets
- **PM2** for app management and deployment
- **AVA** as test framework
- **Redis** for data caching

\* Hopefully for some of you, it can serve as a simple demo for how to mix and make these trending frameworks/tools work together.

-----

## Run
```
$ git clone https://github.com/Yu1989/dota2-match-ticker.git
$ cd dota2-match-ticker
$ npm install
$ npm run build
$ npm run dev
```
Now visit localhost:3000.

View [package.json](https://github.com/Yu1989/dota2-match-ticker/blob/master/package.json#L7-L12) for all available npm commands.

\* To fully kill the dev server, run `npm run kill` after <kbd>ctrl+c</kbd>, which is due to the fact `pm2-dev` doesn't quite play along with `babel-node`.


## Test
```
$ npm test
```
\* Only testing coding styles right now.

## Todo
- More tests.
- Optimize for mobile.
- Static file caching.
