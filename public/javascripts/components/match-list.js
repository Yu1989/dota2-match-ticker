import Match from './match'
import React, { Component } from 'react'

/**
 * Component of a match list, lives or upcomings
 */
class MatchList extends Component {
  render () {
    const matches = this.searchMatches(this.props.keyword).map(m => <Match {...m} />)
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ul className='match-list'>{matches}</ul>
      </div>
    )
  }

  searchMatches (keyword) {
    if (keyword == null || !keyword.length) return this.props.matches

    return this.props.matches.filter(match => {
      const regex = new RegExp(keyword.split('').join('.*'), 'i')
      return [ 'team1', 'team2', 'tournament' ].some((key) => {
        return regex.test(match[key])
      })
    })
  }
}

export default MatchList
