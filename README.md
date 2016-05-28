# Dota2 Match Ticker

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

**WORK IN PROGRESS**

Source code for [Dota2 Match Ticker](https://baidu.com) - an single page site with Dota2 match schedules, and nothing else.

[Dota2赛程表](https://baidu.com)的源码.

-----

A minimal project built with big names:
- Node v6
- Babel
- Koa 2
- React
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

Note: To fully kill the dev server, <kbd>ctrl+c</kbd> out of logging and do `npm run kill`, which is due to the fact `pm2-dev` doesn't quite play along with `babel-node`.


## Test
```
$ npm test
```
