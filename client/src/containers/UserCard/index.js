import React, { Component, createRef } from 'react';
import axios from 'axios';
import { Grid, Container, Responsive, Sticky, Rail, Ref, Segment, Card, Icon, Image } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';

import CurrentUserContainer from '../../components/CurrentUserContainer';
import CFUsersComponent from '../../components/CFUsersComponent';

class UserCard extends Component {
  state = {
    user: [],
    currentUser: [],
    allUsers: [],
  }
 


  async componentDidMount() {
    try {
      const { data } = await axios.get('/api/ucbxusers')
      const dataCopy = data;
      let currentUser = this.props.history.location.state && this.props.history.location.state.newUser
        ? this.props.history.location.state.currentUser
        : dataCopy.slice(dataCopy.length - 1, dataCopy.length);
      console.log(data);
      // let allUsers = data.slice(0, data.length - 1)
      this.setState({ allUsers: data, currentUser });

    } catch (e) {
      console.log(e);
    }
  }

  contextRef = createRef()
  render() {
    return (
      <Container text>
        <Segment.Inline>
          <Grid  columns={2} >
            <Ref innerRef={this.contextRef}>
              <Segment.Group>
                <Responsive as={Segment}>


                  <Grid.Column width={10}>
                    <Card.Group centered itemsPerRow={3}>
                      {this.state.allUsers.length && this.state.allUsers.slice(0, this.state.allUsers.length - 1).map(CodeFrienderUsers => (
                        <CFUsersComponent codeFrienderUsers={CodeFrienderUsers} />
                      )
                      )}
                    </Card.Group>
                  </Grid.Column>



                  <Rail position='left'>
                    <Sticky context={this.contextRef} pushing>
                      <Container>

                      <Grid.Column width={6}>
                        {this.state.currentUser.length && <CurrentUserContainer currentUser={this.state.currentUser[0]} />}
                      </Grid.Column>
                      </Container>
                    </Sticky>
                  </Rail>

                </Responsive>
              </Segment.Group>
            </Ref>
          </Grid>

        </Segment.Inline>
      </Container>
    )
  }
}


export default withRouter(UserCard);


