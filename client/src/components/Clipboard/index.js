import React, { Component } from "react"
import { Icon } from 'semantic-ui-react';


class Clipboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      copySuccess: false
      
    }
  }

  copyCodeToClipboard = () => {
    const el = this.textArea
    el.select()
    document.execCommand("copy")
    this.setState({ copySuccess: true })
  }

  render() {
    return (
      <a onClick={() => this.copyCodeToClipboard()}>
        <Icon name='user' />
        {CodeFrienderUsers.email}
      </a>
    )
  }
}

export default Clipboard;