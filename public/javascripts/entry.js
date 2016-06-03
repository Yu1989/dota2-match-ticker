/**
 * Entry point of React
 */

/**
 * Zepto is a lightweight jQuery alternative
 * This is a custom build with only ajax module
 */
import './lib/zepto'

import React from 'react'
import { render } from 'react-dom'
import MatchTicker from './components/match-ticker'

// Require stylesheets
import '../stylesheets/index.scss'

render(<MatchTicker {...window.dmt} />, document.getElementById('main'))
