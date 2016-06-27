import React, { Component } from 'react'
import lan from '../util/locales'

/**
 * Component that provides a text input for keyword
 */
class Footer extends Component {

  /**
   * Handler for when user modifies keyword in search bar
   * Mostly just passing the new keyword to the real handler in MatchTicker
   * @param  {string} keyword - Modified keyword
   */
  handleChange () {
    this.props.onKeywordChange(this.refs.search.value)
  }

  render () {
    return (
      <footer className='dim sm-text'>
        <span>{this.props.pageView} {lan('pageView')}</span>
        <span className='language'>en</span>
        <span className='language'>zh</span>
      </footer>
    )
  }
}

export default Footer
