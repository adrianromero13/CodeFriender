import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Banner extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted>
        <h3 className="ui block header center">
          Code Friender
</h3>
       <Link to="/">
        <Menu.Item
          name='home'
          // active={activeItem === 'home'}
          // onClick={this.handleItemClick}
          
        />
        </Link>
        <Link to="/match">
        <Menu.Item
          name='Match'
          // active={activeItem === 'match'}
          // onClick={this.handleItemClick}
        />
        </Link>
        <Link to ="/profile">
        <Menu.Item
          name='All Profiles'
          // active={activeItem === 'allProfiles'}
          // onClick={this.handleItemClick}
        />
        </Link>
      </Menu>
    )
  }
}
