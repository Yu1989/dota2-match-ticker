import React from 'react'
import { render } from 'react-dom'

import '../stylesheets/index.scss'
import SearchBar from './components/search-bar'
import MatchList from './components/match-list'

const { lives, upcomings } = window.matches
render(<SearchBar />, document.getElementById('search'))
render(<MatchList matches={lives} title='Live' />, document.getElementById('lives'))
render(<MatchList matches={upcomings} title='Upcoming' />, document.getElementById('upcomings'))
