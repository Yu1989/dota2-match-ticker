import React, { Component } from 'react'

class Match extends Component {
  render () {
    return (
      <li>
        <span>{this.props.team1}</span>
        <span>vs</span>
        <span>{this.props.team2}</span>
        <span>{this.props.tournament}</span>
        <span>
          <img src={this.props.tournamentImgUrl} />
        </span>
        <span>{this.props.liveIn || 'live'}</span>
      </li>
    )
  }
}

export default Match
