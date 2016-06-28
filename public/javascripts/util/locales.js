/**
 * We don't have much content in locales
 * So it's kinda okay to simply pass all the locale packs to browser
 */

import cookie from './cookie'
import moment from 'moment'

const key = 'lan'
let lan

/**
 * Get string per given key and current language
 */
module.exports = function (key) {
  const locale = window.dmt.locales[lan] || window.dmt.locales['en']
  return locale[key] || 'undefined'
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
  moment.locale(language)
}

/**
 * Init
 */
module.exports.set(cookie.get(key) || 'en')
