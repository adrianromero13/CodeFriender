import React, { Component } from 'react';
import { Card, Icon, Image, Container, Header } from 'semantic-ui-react';

import _ from 'lodash';

class CurrentUserContainer extends Component {

  render() {
    return (
      <Container>
        <br />
        <Header as='h3' icon><Icon name='user circle' />User Profile</Header>
        <Card color='olive' >
          <Image src={this.props.currentUser.badge} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</Card.Header>
            <Card.Meta>
              <span>Strength:{this.props.currentUser.strength} </span>
              <br></br>
              <span>Weakness:{this.props.currentUser.weakness} </span>
            </Card.Meta>
            <Card.Description>
              {this.props.currentUser.bio}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name='user' />
            {this.props.currentUser.email}
          </Card.Content>
        </Card>
      </Container>
    )
  }
};

export default CurrentUserContainer;

