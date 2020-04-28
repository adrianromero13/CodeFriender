import React, { Component } from 'react';
import axios from 'axios';
import { Card, Icon, Image } from 'semantic-ui-react';
import Clipboard from './../../components/Clipboard';


class UserCard extends Component {
  state = {
    users: {
      firstName: "",
      lastName: "",
      strength: "",
      weakness: "",
      bio: "",
      email: "",
      github: "",
    }
  };


  componentDidMount() {
    this.fetchProfile();
  };

//   handleInputChange = (e) => {
//     const { value } = e.target;
//     this.setState({ input: value });
//   };

  fetchProfile = () => {
    axios.get('/api/ucbxUsers').then(res => {
      console.log(res);
      this.setState({ users: res.data });
    });
  }

  render() {
    return (
      <Card>
        <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
        <Card.Content>
          <Card.Header>{this.state.users.firstName} + {this.users.lastName}</Card.Header>
          <Card.Meta>
            <span className='date'>{this.state.users.strength}</span>
            <span className='date'>{this.state.users.weakness}</span>
          </Card.Meta>
          <Card.Description>
            {this.users.bio}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href={this.state.users.email}>
            <Icon name='user' onClick={Clipboard} />
                {this.state.users.email}
            </a>
        </Card.Content>
      </Card>
    );
  }
}

export default UserCard;

