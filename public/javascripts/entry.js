import React from 'react'
import { render } from 'react-dom'

import '../stylesheets/index.scss'
import MatchList from './components/match-list'

const { lives, upcomings } = window.matches
render(<MatchList matches={lives} />, document.getElementById('lives'))
render(<MatchList matches={upcomings} />, document.getElementById('upcomings'))
