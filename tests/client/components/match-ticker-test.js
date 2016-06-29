import test from 'ava'
import moment from 'moment'
import MatchTicker from '../../../public/javascripts/components/match-ticker'

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
  const final = MatchTicker.prototype.preprocess(matches)
  lives = final.lives
  upcomings = final.upcomings
})

test('old upcomings should be moved to lives', t => {
  t.is(lives.length, 1)
  t.is(upcomings.length, 1)
})

test('liveIn should be added for and only for upcomings', t => {
  t.true(lives[0].liveIn == null)
  t.is(upcomings[0].liveIn, 'A few seconds')
})
