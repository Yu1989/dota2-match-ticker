import React, { Component } from 'react'
import lan from '../util/locales'

/**
 * Component that provides a text input for keyword
 */
class SearchBar extends Component {

  /**
   * Handler for when user modifies keyword in search bar
   * Mostly just passing the new keyword to the real handler in MatchTicker
   */
  handleChange () {
    this.props.onKeywordChange(this.refs.search.value)
  }

  render () {
    return (
      <div className='search'>
        <input
          type='text'
          placeholder={lan('searchPlaceholder')}
          ref='search'
          value={this.props.keyword}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    )
  }
}

export default SearchBar
