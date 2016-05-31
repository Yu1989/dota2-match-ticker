import Match from './match'
import React, { Component } from 'react'

class MatchList extends Component {
  render () {
    const matches = this.props.matches.map(m => <Match {...m} />)
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ul className='match-list'>{matches}</ul>
      </div>
    )
  }
}

export default MatchList
