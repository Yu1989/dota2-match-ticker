/**
 * Set up browser env for client-side testing
 */

global.document = require('jsdom').jsdom('<body></body>')
global.window = document.defaultView
global.navigator = window.navigator
