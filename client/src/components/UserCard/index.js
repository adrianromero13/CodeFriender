import React, { Component, createRef } from 'react';
import axios from 'axios';

import { Card, Icon, Image } from 'semantic-ui-react';
import { Grid, Sticky, Rail, Ref, Segment, Placeholder } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';

import CurrentUserContainer from '../CurrentUserContainer';

class UserCard extends Component {
  state = {
    user: [],
    avatar: '',
    currentUser: [],
    allUsers: [],
    //new
    weaknessMatch: '',
    strengthMatch: '',
  }


  async componentDidMount() {
    try {
      const { data } = await axios.get('/api/ucbxusers')
      const dataCopy = data;
      let currentUser = this.props.history.location.state && this.props.history.location.state.newUser
                        ? this.props.history.location.state.currentUser 
                        : dataCopy.slice(dataCopy.length-1, dataCopy.length);
      console.log(data);
      // let allUsers = data.slice(0, data.length - 1)
      this.setState({ allUsers: data, currentUser });

    } catch (e) {
      console.log(e);
    }
  }

  contextRef = createRef()
  render() {
    console.log(this.state.allUsers);
    console.log(this.state.currentUser);
    return (
      <Grid centered columns={2} divided>
        {/* new */}
        <Ref innerRef={this.contextRef}>
          <Segment>
            <Grid.Column width={12}>
              {this.state.allUsers.length && this.state.allUsers.slice(0, this.state.allUsers.length - 1).map(CodeFrienderUsers => (
                <Card key={CodeFrienderUsers.id}>
                  <Image src={CodeFrienderUsers.badge} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>{CodeFrienderUsers.first_name} {CodeFrienderUsers.last_name}</Card.Header>
                    <Card.Meta>
                      <span>Strength:{CodeFrienderUsers.strength} </span>
                      <br></br>
                      <span>Weakness:{CodeFrienderUsers.weakness} </span>
                    </Card.Meta>
                    <Card.Description>
                      {CodeFrienderUsers.bio}
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    {/* <a> */}
                      <Icon name='allUsers' />
                      {CodeFrienderUsers.email}
                    {/* </a> */}
                  </Card.Content>
                </Card>
              )
              )}</Grid.Column>
            <Rail position='left'>
              <Sticky context={this.contextRef} pushing>
                <Grid.Column width={4} >

                  {this.state.currentUser.length && <CurrentUserContainer currentUser={this.state.currentUser[0]} />}
        
                </Grid.Column>
              </Sticky>
            </Rail>
          </Segment>
        </Ref>
      </Grid>
    )
  }
}


export default withRouter(UserCard);


