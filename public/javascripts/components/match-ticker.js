import React, { Component } from 'react'
import SearchBar from './search-bar'
import MatchList from './match-list'

/**
 * Most outter component containing search bar and two lists
 */
class MatchTicker extends Component {
  constructor (props) {
    super(props)
    this.state = { keyword: '' }
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

  render () {
    const handleKeywordChange = this.handleKeywordChange.bind(this)
    return (
      <div>
        <SearchBar
          keyword={this.state.keyword}
          onKeywordChange={handleKeywordChange}
        />
        <MatchList
          title='Live'
          matches={this.props.lives}
          keyword={this.state.keyword}
          onMatchClick={handleKeywordChange}
        />
        <MatchList
          title='Upcoming'
          matches={this.props.upcomings}
          keyword={this.state.keyword}
          onMatchClick={handleKeywordChange}
        />
      </div>
    )
  }
}

export default MatchTicker
