import _ from 'lodash';
import React, { Component, createRef } from 'react';
import axios from 'axios';
import { Card, Icon, Image } from 'semantic-ui-react';
// import { Grid, Sticky, Rail, Ref, Segment, Placeholder } from 'semantic-ui-react';
// import CurrentUserContainer from '../CurrentUserContainer';

class CurrentUserContainer extends Component {
  state = {
    user: [],
    avatar: '',
    //new
    // weaknessMatch: '',
    // strengthMatch: '',
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
        <div>
              {this.state.user.slice(this.state.user.length - 1, this.state.user.length).map(currentUser => (
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
              )}</div>
  
    )}
};


export default CurrentUserContainer;






// import React from 'react';
// import Match from '../CurrentUser';

// function MatchContainer({ id, badge, first_name, last_name, strength, weakness, bio, email }) {
//     return(
//         <div>
//             <Match id={id}
//             badge={badge}
//             firstName={first_name}
//             lastName={last_name}
//             strength={strength}
//             weakness={weakness}
//             bio={bio}
//             email={email} />
//         </div>
//     )
// }

// export default MatchContainer;