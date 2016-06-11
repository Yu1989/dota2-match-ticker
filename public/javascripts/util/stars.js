/**
 * Util to save ids of starred matches in cookie
 */

import cookie from './cookie'

const key = 'starred'
const separator = '|'
let _starred

/**
 * Get set of ids of starred matches from cookie with lazy initialization
 * @return {Set} Set of match ids
 */
function starred () {
  if (!_starred) {
    _starred = new Set()
    const idStr = cookie.get(key)
    const ids = idStr ? idStr.split(separator) : []
    for (let id of ids) {
      _starred.add(id)
    }
  }
  return _starred
}

/**
 * Save set to cookie
 */
function saveStared () {
  cookie.set(key, [...starred()].join(separator))
}

export function isStared (matchId) {
  return starred().has(matchId)
}

export function star (matchId) {
  starred().add(matchId)
  saveStared()
}

export function unstar (matchId) {
  starred().delete(matchId)
  saveStared()
}
