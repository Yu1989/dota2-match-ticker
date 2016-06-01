import _ from 'lodash'
import moment from 'moment'
import request from 'request-promise'
import cheerio from 'cheerio'
import { dataLog as log } from '../logger'

const baseUrl = 'http://www.gosugamers.net'
const urlForPage = page => `/dota2/gosubet?u-page=${page}`

/**
 * Base request with some default settings
 */
const req = request.defaults({
  baseUrl,
  transform: body => cheerio.load(body)
})

/**
 * If a team's name is cut off in list, scrape detail page for full name
 * @param  {string} matchUrl - Url of match detail page
 * @return {string} Team's full name
 */
async function getTeamFullNames (matchUrl) {
  const $ = await req(matchUrl)
  return [$('.opponent1 h3 a').text(), $('.opponent2 h3 a').text()]
}

/**
 * Map time unit to number of seconds
 * @type {Object}
 */
const secPerUnitMap = {
  'w': 7 * 24 * 60 * 60,
  'd': 24 * 60 * 60,
  'h': 60 * 60,
  'm': 60,
  's': 1
}

/**
 * Convert the time left to a exact time to start since it is to be cached
 * @param  {string} liveIn - Time left before match starts, e.g., 3h 2m
 * @return {number} Unix timestamp of starting time
 */
function liveInToLiveAt (liveIn) {
  const liveInSeconds = liveIn.split(' ').reduce((prev, curr) => {
    const unit = curr[curr.length - 1]
    const count = +curr.slice(0, curr.length - 1)
    return secPerUnitMap[unit] * count + prev
  }, 0)
  return +moment().format('X') + liveInSeconds
}

/**
 * Extrac match info given an <li> element representing a match
 * @param  {Object} $e - Cheerio object of the <li>
 * @return {Object} Match object
 */
async function getMatch ($e) {
  let team1 = $e.find('.opp1 span:first-child').text()
  let team2 = $e.find('.opp2 span:last-child').text()

  // If any team's name is cut off, visit match details page for full names.
  if (team1.includes('...') || team2.includes('...')) {
    [team1, team2] = await getTeamFullNames($e.find('a.match').attr('href'))
  }

  // Format tournament name
  const tournament = _.startCase(
    $e.find('td.tournament a').attr('href').match(/-([^/]*)/)[1]
  )
  const tournamentImgUrl = baseUrl + $e.find('td.tournament img').attr('src')
  const match = {team1, team2, tournament, tournamentImgUrl}

  // Get live-in if exists and convert to live-at
  const liveIn = $e.find('.live-in').text().trim()
  if (liveIn.length) match.liveAt = liveInToLiveAt(liveIn)

  return match
}

/**
 * Extrac list of live matches
 * @param  {Object} $ - Cheerio selector for the document
 * @return {Array.<Object>} Array of live matches
 */
async function getLives ($) {
  const lives = []
  for (let e of $('#col1 .box:first-child tr').get()) {
    lives.push(await getMatch($(e)))
  }
  return lives
}

/**
 * Extrac list of upcoming matches
 * @param  {Object} $ - Cheerio selector for the first page
 * @return {Array.<Object>} Array of upcoming matches
 */
async function getUpcomings ($) {
  const upcomings = []

  // Figure out how many pages there are
  const pageNos = $('#col1 .box:nth-child(2) .pages a')
    .map((i, e) => +$(e).text().trim() || 0)
    .get()
  const maxPage = _.max(pageNos)

  // Scrape one by one
  for (let i = 1; i <= maxPage; ++i) {
    $ = i === 1 ? $ : await req(urlForPage(i))
    for (let e of $('#col1 .box:nth-child(2) tr').get()) {
      upcomings.push(await getMatch($(e)))
    }
  }
  return upcomings
}

/**
 * Scrape match data from gosugamers
 * @return {Object} Match data object including lives and upcomings
 */
async function scrape () {
  log.info('start scraping')
  try {
    const $ = await req(urlForPage(1))
    const lives = await getLives($)
    const upcomings = await getUpcomings($)
    log.info('done scraping')
    return { lives, upcomings }
  } catch (err) {
    log.error({ err: err }, 'scraping error')
    return { lives: [], upcomings: [] }
  }
}

export default scrape
