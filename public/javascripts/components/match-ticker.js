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

  handleKeywordChange (keyword) {
    this.setState({ keyword })
  }

  render () {
    return (
      <div className='main'>
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
