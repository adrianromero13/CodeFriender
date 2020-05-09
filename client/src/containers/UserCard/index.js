import React, { Component, createRef } from 'react';
import axios from 'axios';
import { Grid, Container, Responsive, Sticky, Rail, Ref, Segment, Card, Icon, Image, Header } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';

import CurrentUserContainer from '../../components/CurrentUserCard';
import CodeFriendersCard from '../../components/CodeFriendersCard';

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

      <Grid columns={2}>
        <Grid.Row>

          <Grid.Column>
            <Header as='h3' icon textAlign='center'><Icon name='user circle' />User Profile</Header>
          </Grid.Column>
          <Grid.Column>
            <Header as='h3' icon textAlign='center'><Icon name='users circle' />Code Frienders</Header>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>

          <Grid.Column>
            {this.state.currentUser.length && <CurrentUserContainer currentUser={this.state.currentUser[0]} />}
          </Grid.Column>

          <Grid.Column>
            <Grid columns='three'>
              <Grid.Row columns={3}>
                {this.state.allUsers.length && this.state.allUsers.slice(0, this.state.allUsers.length - 1).map(CodeFrienderUsers => (
                  <CodeFriendersCard codeFrienderUsers={CodeFrienderUsers} />
                )
                )}
              </Grid.Row>
            </Grid>
          </Grid.Column>

        </Grid.Row>

      </Grid>


      // <Container text>

      //   {/* <Grid centered columns={2} > */}
      //     <Ref innerRef={this.contextRef}>

      //       <Segment.Group>
      //         <Responsive as={Segment}>

      //           {/* here */}
      //           <Grid.Column>
      //             <Grid.Row columns={3}>
      //               {/* <Card.Group centered itemsPerRow={3}> */}
      // {this.state.allUsers.length && this.state.allUsers.slice(0, this.state.allUsers.length - 1).map(CodeFrienderUsers => (
      //   <CodeFriendersCard codeFrienderUsers={CodeFrienderUsers} />
      //   )
      //   )}
      //               {/* </Card.Group> */}
      //             </Grid.Row>
      //           </Grid.Column>




      //           <Rail attached close size='mini' position='left' >
      //             <Sticky context={this.contextRef} pushing>
      //               <Container>
      //                 <Grid.Column width={6}>
      //                   {this.state.currentUser.length && <CurrentUserContainer currentUser={this.state.currentUser[0]} />}
      //                 </Grid.Column>
      //               </Container>
      //             </Sticky>
      //           </Rail>


      //         </Responsive>
      //       </Segment.Group>
      //     </Ref>
      //   {/* </Grid> */}

      // </Container>







    )
  }
}


export default withRouter(UserCard);
