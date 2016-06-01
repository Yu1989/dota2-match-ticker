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
   * Handler for when user modifies keyword in search bar
   * Setting new state to trigger view refreshing
   * @param  {string} keyword - Modified keyword
   */
  handleKeywordChange (keyword) {
    this.setState({ keyword })
  }

  render () {
    return (
      <div>
        <SearchBar
          keyword={this.state.keyword}
          onKeywordChange={this.handleKeywordChange.bind(this)}
        />
        <MatchList
          matches={this.props.lives}
          keyword={this.state.keyword}
          title='Live'
        />
        <MatchList
          matches={this.props.upcomings}
          keyword={this.state.keyword}
          title='Upcoming'
        />
      </div>
    )
  }
}

export default MatchTicker
