import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Container, Responsive, Segment, Card } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

import CurrentUserCard from '../../components/CurrentUserCard';
import CodeFriendersCard from '../../components/CodeFriendersCard';
import AllProfileHeader from '../../components/AllProfileHeader';

class UserCard extends Component {
  state = {
    user: [],
    currentUser: [],
    allUsers: [],
    itemNumber: [],
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

  handleOnUpdate = (e, { width }) => this.setState({ itemNumber: width })
  

  render() {



    // here


    const { width } = this.state
    const itemsPerRow =
      width >= Responsive.onlyComputer.minWidth ? '2' : '3'
      console.log(this.state.itemNumber)
    return (
      <Container>

        <Grid columns={2}>
          <AllProfileHeader />

        </Grid>
        <Grid.Row>
          <Grid columns={2}>

            <Grid.Column width={4}>
              <Responsive minWidth={768}>
                {this.state.currentUser.length && <CurrentUserCard currentUser={this.state.currentUser[0]} />}
              </Responsive>
            </Grid.Column>

            <Grid.Column width={12}>
              {/* <Grid> */}




              {/* here */}


              
              <Responsive
              fireOnMount
              onUpdate={this.handleOnUpdate}
              >

              <Card.Group fluid  itemsPerRow={itemsPerRow}>

                {this.state.allUsers.length && this.state.allUsers.slice(0, this.state.allUsers.length - 1).map(CodeFrienderUsers => (
                  <CodeFriendersCard codeFrienderUsers={CodeFrienderUsers} />
                  )
                  )}
              </Card.Group>
                  </Responsive>
              {/* </Grid> */}
            </Grid.Column>


          </Grid>
        </Grid.Row>
      </Container>
    )
  }
}


export default withRouter(UserCard);
