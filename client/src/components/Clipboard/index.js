import React, { Component } from "react"
// import { useParams } from "react-router-dom"

class Clipboard extends Component {
    copyCodeToClipboard = () => {
    const el = this.textArea
    el.select()
    document.execCommand("copy")
  }
 
  render() {
    return (
      <div>
        <div>
          <textarea
            ref={(textarea) => this.textArea = textarea}
            value="Example copy for the textarea."
          />
        </div>
        <div>
          <button onClick={() => this.copyCodeToClipboard()}>
            {this.users.email}
          </button>
        </div>
      </div>
    )
  }
}

export default Clipboard;