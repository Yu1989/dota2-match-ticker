# Dota2 Match Ticker

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

Source code for [Dota2 Match Ticker](http://dmt.jiangyu.rocks) - an single page site with Dota2 match schedules, and nothing else.

[Dota2赛程表](https://baidu.com)的源码.

-----

A minimal project built with big names:
- Babel
- Koa 2
- React
- Webpack
- PM2

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
- Tests with [AVA](https://github.com/avajs/ava).
