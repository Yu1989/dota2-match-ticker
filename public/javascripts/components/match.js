import React, { Component } from 'react'

/**
 * Component that renders one match in an <li>
 */
class Match extends Component {
  render () {
    // Set image as background-image for better control
    const imageStyle = {
      backgroundImage: `url(${this.props.tournamentImgUrl})`
    }
    return (
      <li>
        <span className='team1'>{this.props.team1}</span>
        <span className='vs dim'>VS</span>
        <span className='team2'>{this.props.team2}</span>
        <span className='live-in'>{this.props.liveIn || 'Live now'}</span>
        <span className='tournament'>{this.props.tournament}</span>
        <span className='tournament-img'><span style={imageStyle}></span></span>
      </li>
    )
  }
}

export default Match
