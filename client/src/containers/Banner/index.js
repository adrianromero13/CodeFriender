import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Header, Container, Icon } from 'semantic-ui-react'

export default class Banner extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Container fluid>
        <Menu inverted size='large'>
          <Header as="h3" inverted >
            <Icon name='code branch' />
            <Header.Content>
              Code Friender
          <Header.Subheader>Mentor | Collaborate | Apprentice</Header.Subheader>
            </Header.Content>
          </Header>
          <Link to="/">
            <Menu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/match">
            <Menu.Item
              name='match'
              active={activeItem === 'match'}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/profile">
            <Menu.Item
              name='allProfiles'
              active={activeItem === 'allProfiles'}
              onClick={this.handleItemClick}
            />
          </Link>
        </Menu>
      </Container>
    )
  }
}
