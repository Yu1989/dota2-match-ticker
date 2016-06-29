import React, { Component } from 'react'
import { StaggeredMotion, spring } from 'react-motion'
import Match from './match'

/**
 * Component of a match list, lives or upcomings
 */
class MatchList extends Component {

  /**
   * Filter matches per keyword
   * @param  {string} keyword - User-input keyword
   * @return {Array.<Object>} Array of matches that contain the keyword
   */
  searchMatches (keyword) {
    if (keyword == null || !keyword.length) return this.props.matches

    return this.props.matches.filter(match => {
      // For example, 'abc' -> /a.*b.*c/
      const regex = new RegExp(keyword.split('').join('.*'), 'i')
      return [ 'team1', 'team2', 'tournament' ].some(key => {
        return regex.test(match[key])
      })
    })
  }

  render () {
    const matches = this.searchMatches(this.props.keyword)
    let matchList

    if (!matches.length) {
      matchList = (
        <ul className='match-list'>
          <li><span className='dim'>No matches.</span></li>
        </ul>
      )
    } else {
      const defaultStyles = []
      for (let i = 0; i < matches.length; ++i) defaultStyles.push({ opacity: 0 })

      matchList = (
        <StaggeredMotion
          defaultStyles={defaultStyles}
          styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
            return i === 0
              ? { opacity: spring(1) }
              : { opacity: spring(prevInterpolatedStyles[i - 1].opacity) }
          })}>
            {interpolatingStyles =>
              <ul className='match-list'>
                {interpolatingStyles.map((style, i) =>
                  <Match {...matches[i]} key={matches[i].id} style={style} onComponentClick={this.props.onMatchClick} />
                )}
              </ul>
            }
        </StaggeredMotion>
      )
    }

    return (
      <div>
        <h2>{this.props.title}</h2>
        {matchList}
      </div>
    )
  }
}

export default MatchList
