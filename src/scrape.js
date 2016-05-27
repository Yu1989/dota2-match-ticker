import _ from 'lodash'
import request from 'request-promise'
import cheerio from 'cheerio'

const baseUrl = 'http://www.gosugamers.net'
const urlForPage = page => `/dota2/gosubet?u-page=${page}`

const req = request.defaults({
  baseUrl,
  transform: body => cheerio.load(body)
})

const getTeamFullNames = async function (matchUrl) {
  const $ = await req(matchUrl)
  return [$('.opponent1 h3 a').text(), $('.opponent2 h3 a').text()]
}

const getMatch = async function ($e) {
  let team1 = $e.find('.opp1 span:first-child').text()
  let team2 = $e.find('.opp2 span:last-child').text()

  // If any team's name is cut off, visit match details page for full names.
  if (team1.includes('...') || team2.includes('...')) {
    [team1, team2] = await getTeamFullNames($e.find('a.match').attr('href'))
  }

  const tournament = _.startCase(
    $e.find('td.tournament a').attr('href').match(/-([^/]*)/)[1]
  )
  const tournamentImgUrl = baseUrl + $e.find('td.tournament img').attr('src')
  const match = {team1, team2, tournament, tournamentImgUrl}

  // Get live-in if exists
  const liveIn = $e.find('.live-in').text().trim()
  if (liveIn.length) match.liveIn = liveIn
  // TODO convert to unix timestamp

  return match
}

const getLives = async function ($) {
  const lives = []
  for (let e of $('#col1 .box:first-child tr').get()) {
    lives.push(await getMatch($(e)))
  }
  return lives
}

const getUpcomings = async function ($) {
  const upcomings = []
  const pageNos = $('#col1 .box:nth-child(2) .pages a')
    .map((i, e) => +$(e).text().trim() || 0)
    .get()
  const maxPage = _.max(pageNos)
  for (let i = 1; i <= maxPage; ++i) {
    $ = i === 1 ? $ : await req(urlForPage(i))
    for (let e of $('#col1 .box:nth-child(2) tr').get()) {
      upcomings.push(await getMatch($(e)))
    }
  }
  return upcomings
}

const scrape = async function () {
  console.log('scrape start')
  const $ = await req(urlForPage(1))
  const lives = await getLives($)
  const upcomings = await getUpcomings($)
  console.log('scrape done')
  return {lives, upcomings}
}

export default scrape
