import _ from 'lodash';
import React, { Component, createRef } from 'react';
import axios from 'axios';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Grid, Sticky, Rail, Ref, Segment, Placeholder } from 'semantic-ui-react';
// import { CopyToClipboard } from 'react-copy-to-clipboard';
// import Clipboard from './../Clipboard';
// import Clipboard from './../../components/Clipboard';
// import Match from './../Match';
import CurrentUserContainer from '../CurrentUserContainer';

class UserCard extends Component {
  state = {
    user: [],
    avatar: '',
    //new
    weaknessMatch: '',
    strengthMatch: '',
  }


  async componentDidMount() {
    try {
      const { data } = await axios.get('/api/ucbxusers')
      console.log(data);
      this.setState({ user: data });
      console.log(this.state.user);
    } catch (e) {
      console.log(e);
    }
  }

  contextRef = createRef()
  render() {
    console.log(this.state);
    return (
      <Grid centered columns={2} divided>
        {/* new */}
        <Ref innerRef={this.contextRef}>
          <Segment>
            <Grid.Column fluid horizontal width={12}>
              {this.state.user.slice(0, this.state.user.length - 1).map(CodeFrienderUsers => (
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
                    <a>
                      <Icon name='user' />
                      {CodeFrienderUsers.email}
                    </a>
                  </Card.Content>
                </Card>
              )
              )}</Grid.Column>
            <Rail position='left'>
              <Sticky context={this.contextRef} pushing>
                <Grid.Column width={4} centered>
                  <CurrentUserContainer />


                </Grid.Column>
              </Sticky>
            </Rail>
          </Segment>
        </Ref>
      </Grid>
      //         {/* if statement
      // get all users then filter by strenth and weakness

      // if(this.state.weaknessMatch === this.state.strengthMatch){

      // }

      // */}
      //         {/* insert props into Match */}





      // <div>
      //   { this.state.user.length 
      //       ? this.renderUserCard() 
      //       : <div><p>Loading...</p></div>
      //     }
      // </div>
    )
  }
}


export default UserCard;


