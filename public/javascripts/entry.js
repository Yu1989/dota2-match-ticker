/**
 * Entry point of React
 */

import React from 'react'
import { render } from 'react-dom'
import MatchTicker from './components/match-ticker'

// Require stylesheets
import '../stylesheets/index.scss'

render(<MatchTicker {...window.matches} />, document.getElementById('main'))
