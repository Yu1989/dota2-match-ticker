import React, { Component } from 'react'
import { isStared, star, unstar } from '../util/stars'

/**
 * Component that renders one match in an <li>
 */
class Match extends Component {
  constructor (props) {
    super(props)

    this.state = { starred: isStared(this.props.id) }
  }

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
   * Handler for click event on 'vs'
   * It stars/unstars match and syncs with cookie
   */
  handleClickOnVs () {
    this.state.starred ? unstar(this.props.id) : star(this.props.id)
    this.setState({ starred: !this.state.starred })
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
    const liClass = this.state.starred ? 'starred' : ''

    return (
      <li className={liClass}>
        <span className={team1Class} onClick={this.handleClickOnTeam.bind(this)}>
          {this.props.team1}
        </span>
        <span className='vs dim sm-text' onClick={this.handleClickOnVs.bind(this)}>
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
