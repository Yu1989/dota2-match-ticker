import React, { Component } from 'react'

class Match extends Component {
  render () {
    const imageStyle = {
      backgroundImage: `url(${this.props.tournamentImgUrl})`
    }
    return (
      <li>
        <span className='team1'>{this.props.team1}</span>
        <span className='vs'>VS </span>
        <span className='team2'>{this.props.team2}</span>
        <span className='live-in'>{this.props.liveIn || 'Live now'}</span>
        <span className='tournament'>{this.props.tournament}</span>
        <span className='tournament-img'><span style={imageStyle}></span></span>
      </li>
    )
  }
}

export default Match
