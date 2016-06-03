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

  /**
   * When team is 'to be decided', add class 'dim'
   * @param  {string} team - Team name
   * @return {string} Class string for the team span
   */
  classForTeam (team) {
    return team.toLowerCase() === 'to be decided'
      ? 'team dim'
      : 'team'
  }

  render () {
    // Set image as background-image for better control
    const imageStyle = {
      backgroundImage: `url(${this.props.tournamentImgUrl})`
    }
    const team1Class = this.classForTeam(this.props.team1)
    const team2Class = this.classForTeam(this.props.team2)

    return (
      <li>
        <span className={team1Class} onClick={this.handleClickOnTeam.bind(this)}>
          {this.props.team1}
        </span>
        <span className='vs dim sm-text'>
          VS
        </span>
        <span className={team2Class} onClick={this.handleClickOnTeam.bind(this)}>
          {this.props.team2}
        </span>
        <span className='live-in sm-text'>
          {this.props.liveIn || 'Live now'}
        </span>
        <span className='tournament sm-text' onClick={this.handleClickOnTournament.bind(this)}>
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
