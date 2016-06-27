/**
 * We don't have much content in locales
 * So it's kinda okay to simply pass all the locale packs to browser
 */

import cookie from './cookie'

const key = 'lan'
let lan = cookie.get(key) || 'en'

/**
 * Get string per given key and current language
 */
module.exports = function (key) {
  return window.locales[lan][key] || 'undefined'
}

/**
 * Get language
 */
module.exports.get = function () {
  return lan
}

/**
 * Set language
 */
module.exports.set = function (language = 'en') {
  lan = language
  cookie.set(key, language)
}
