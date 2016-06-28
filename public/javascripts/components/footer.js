import React, { Component } from 'react'
import lan from '../util/locales'

/**
 * Component that provides a text input for keyword
 */
class Footer extends Component {

  /**
   * Handler for when a language option is clicked on
   * Get data-lan attribute and pass to the outer handler
   */
  handleLanguageChange (e) {
    this.props.onLanguageChange(e.currentTarget.getAttribute('data-lan'))
  }

  render () {
    const handleLanguageChange = this.handleLanguageChange.bind(this)
    return (
      <footer className='dim sm-text'>
        <span>{this.props.pageView} {lan('pageView')}</span>
        <span>
          <a href='#' data-lan='en' onClick={handleLanguageChange}>English</a>
          <a href='#' data-lan='zh' onClick={handleLanguageChange}>中文</a>
        </span>
      </footer>
    )
  }
}

export default Footer
