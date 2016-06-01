/**
 * Entry point of React
 */

import React from 'react'
import { render } from 'react-dom'
import '../stylesheets/index.scss'
import MatchTicker from './components/match-ticker'

render(<MatchTicker {...window.matches} />, document.getElementById('main'))
