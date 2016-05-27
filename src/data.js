/* global setInterval */

import scrape from './scrape'

let cache
let timer
const interval = 2 * 60 * 1000 // TODO ecosystem

const fetchData = () => scrape().then(result => { cache = result })

const loopFetchingData = function () {
  if (timer) return
  timer = setInterval(fetchData, interval)
  fetchData()
}

const getData = () => cache

export {loopFetchingData, getData}
