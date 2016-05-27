import React, { Component } from 'react'
import { render } from 'react-dom'

class HelloMessage extends Component {
  render () {
    return <div>Hello {this.props.name}</div>
  }
}

// 加载组件到 DOM 元素 mountNode
render(<HelloMessage name='John' />, document.getElementById('main'))
