import Match from './match'
import React, { Component } from 'react'

class MatchList extends Component {
  render () {
    console.log(this.props )
    const matches = this.props.matches.map(m => <Match {...m} />)
    return <ul>{matches}</ul>
  }
}

export default MatchList
