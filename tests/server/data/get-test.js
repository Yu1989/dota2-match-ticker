import test from 'ava'
import moment from 'moment'
import getData from '../../../src/data/get'
import cache from '../../../src/data/cache'

const matches = {
  lives: [],
  upcomings: [
    { liveAt: +moment().format('X') - 5 },
    { liveAt: +moment().format('X') + 5 }
  ]
}
let lives
let upcomings

test.before(async t => {
  // Stub cache.get
  cache.get = () => matches

  const final = await getData()
  lives = final.lives
  upcomings = final.upcomings
})

test('old upcomings should be moved to lives', t => {
  t.is(lives.length, 1)
  t.is(upcomings.length, 1)
})

test('liveAt should be removed', t => {
  t.true(lives[0].liveAt == null)
  t.true(upcomings[0].liveAt == null)
})

test('liveIn should be added for and only for upcomings', t => {
  t.true(lives[0].liveIn == null)
  t.is(upcomings[0].liveIn, 'A few seconds')
})
