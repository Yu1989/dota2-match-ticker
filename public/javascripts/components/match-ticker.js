/* global setInterval, $ */

import React, { Component } from 'react'
import SearchBar from './search-bar'
import MatchList from './match-list'
import Footer from './footer'
import lan from '../util/locales'

// Url to fetch match data as json
const dataUrl = '/matches.json'

/**
 * Most outter component containing search bar and two lists
 */
class MatchTicker extends Component {
  constructor (props) {
    super(props)

    this.state = {
      language: lan.get(),
      keyword: '',
      matches: props.matches
    }
    this.refreshWithInterval(props.interval)
  }

  /**
   * Refresh with new data from server every certain period of time
   * @param  {number} interval - Refreshing interval, unit: ms
   */
  refreshWithInterval (interval) {
    setInterval(() => {
      $.getJSON(dataUrl, (matches) => {
        this.setState({ matches: matches })
      })
    }, interval)
  }

  /**
   * Handler for when keyword is modified,
   * from direct typing in search bar or clicking on teams or tournament
   * Setting new state to trigger view refreshing
   * @param  {string} keyword - Modified keyword
   */
  handleKeywordChange (keyword) {
    this.setState({ keyword })
  }

  handleLanguageChange (language) {
    lan.set(language)
    this.setState({ language })
  }

  render () {
    const handleKeywordChange = this.handleKeywordChange.bind(this)
    const handleLanguageChange = this.handleLanguageChange.bind(this)

    return (
      <div>
        <SearchBar
          keyword={this.state.keyword}
          onKeywordChange={handleKeywordChange}
        />
        <MatchList
          title={lan('liveTitle')}
          matches={this.state.matches.lives}
          keyword={this.state.keyword}
          onMatchClick={handleKeywordChange}
        />
        <MatchList
          title={lan('upcomingTitle')}
          matches={this.state.matches.upcomings}
          keyword={this.state.keyword}
          onMatchClick={handleKeywordChange}
        />
        <Footer
          pageView={this.props.pageView}
          onLanguageChange={handleLanguageChange}
        />
      </div>
    )
  }
}

export default MatchTicker
