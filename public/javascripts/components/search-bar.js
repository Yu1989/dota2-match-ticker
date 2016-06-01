import React, { Component } from 'react'

/**
 * Component that provides a text input for keyword
 */
class SearchBar extends Component {
  handleChange () {
    this.props.onKeywordChange(this.refs.search.value)
  }

  render () {
    return (
      <div className='search'>
        <input
          type='text'
          placeholder='Search'
          ref='search'
          value={this.props.keyword}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    )
  }
}

export default SearchBar
