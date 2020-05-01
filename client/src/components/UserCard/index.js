import _ from 'lodash';
import React, { Component, createRef } from 'react';
import axios from 'axios';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Grid, Sticky, Rail, Ref, Segment, Placeholder } from 'semantic-ui-react';

// import Clipboard from './../../components/Clipboard';
// import Match from './../Match';
import MatchContainer from '../MatchContainer';

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
      //  should only get 1 user here
      const { data } = await axios.get('/api/ucbxusers')
      console.log(data);
      // if data is an array, you can use .map
      // if data is an object, you can use a for...in loop
      // const { data: picture } = await axios.get(`https://api.github.com/users/${data[10].github}`);
      // this.setState({ user: data, avatar: picture.avatar_url });
      this.setState({ user: data });
      console.log(this.state.user);
    } catch (e) {
      console.log(e);
    }
  }

  // renderUserCard() {
  //     this.state.user.map(currentUser => {
  //       return (
  //         <Card key={currentUser.id}>
  //           <Image src={currentUser.badge} wrapped ui={false} />
  //           <Card.Content>
  //             <Card.Header>{currentUser.first_name} {currentUser.last_name}</Card.Header>
  //             <Card.Meta>
  //               <span>Strength:{currentUser.strength} </span>
  //               <br></br>
  //               <span>Weakness:{currentUser.weakness} </span>
  //             </Card.Meta>
  //             <Card.Description>
  //               {currentUser.bio}
  //             </Card.Description>
  //           </Card.Content>
  //           <Card.Content extra>
  //             <a>
  //               <Icon name='user' />
  //               {currentUser.email}
  //             </a>
  //           </Card.Content>
  //         </Card>
  //       )
  //     })
  // }

  contextRef = createRef()
  render() {
    console.log(this.state);
    return (
      <Grid centered columns={2} divided>
        {/* new */}
        <Ref innerRef={this.contextRef}>
          <Segment>
            <Grid.Column fluid horizontal width={12}>
              {this.state.user.map(currentUser => (
                <Card key={currentUser.id}>
                  <Image src={currentUser.badge} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>{currentUser.first_name} {currentUser.last_name}</Card.Header>
                    <Card.Meta>
                      <span>Strength:{currentUser.strength} </span>
                      <br></br>
                      <span>Weakness:{currentUser.weakness} </span>
                    </Card.Meta>
                    <Card.Description>
                      {currentUser.bio}
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name='user' />
                      {currentUser.email}
                    </a>
                  </Card.Content>
                </Card>
              )
              )}</Grid.Column>
            <Rail position='left'>
              <Sticky context={this.contextRef} pushing>
                <Grid.Column width={4} centered>
                  <MatchContainer />


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


