import test from 'ava'
import cache from '../../../src/data/cache'

const matches = {
  lives: [],
  upcomings: [{ foo: 'bar' }]
}

test.before(async t => {
  await cache.set(matches)
})

test('cache should exist now', async t => {
  t.is(await cache.exists(), true)
})

test('will get cache', async t => {
  t.deepEqual(await cache.get(), matches)
})
