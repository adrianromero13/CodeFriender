import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

import _ from 'lodash';

class CurrentUserContainer extends Component {

  render() {
    return (
      <div>
        {/* {this.state.user.slice(this.state.user.length - 1, this.state.user.length).map(currentUser => ( */}
        <Card>
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
      </div>

    )
  }
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