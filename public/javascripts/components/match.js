import React, { Component } from 'react'

/**
 * Component that renders one match in an <li>
 */
class Match extends Component {

  /**
   * Handler for click event on teams
   */
  handleClickOnTeam (e) {
    this.props.onComponentClick(e.currentTarget.textContent.trim())
  }

  /**
   * Handler for click event on tournament or its image
   */
  handleClickOnTournament () {
    this.props.onComponentClick(this.props.tournament)
  }

  render () {
    // Set image as background-image for better control
    const imageStyle = {
      backgroundImage: `url(${this.props.tournamentImgUrl})`
    }
    return (
      <li>
        <span className='team1' onClick={this.handleClickOnTeam.bind(this)}>
          {this.props.team1}
        </span>
        <span className='vs dim'>
          VS
        </span>
        <span className='team2' onClick={this.handleClickOnTeam.bind(this)}>
          {this.props.team2}
        </span>
        <span className='live-in'>
          {this.props.liveIn || 'Live now'}
        </span>
        <span className='tournament' onClick={this.handleClickOnTournament.bind(this)}>
          {this.props.tournament}
        </span>
        <span className='tournament-img' onClick={this.handleClickOnTournament.bind(this)}>
          <span style={imageStyle}></span>
        </span>
      </li>
    )
  }
}

export default Match
