
import React, { Component } from 'react';
import axios from 'axios';
import { Card, Icon, Image } from 'semantic-ui-react';
// import Clipboard from './../../components/Clipboard';


class UserCard extends Component {
  state = {
    user: {},
    avatar: '',
  }



  async componentDidMount() {
    try {
      //  should only get 1 user here
      const { data } = await axios.get('/api/ucbxusers')
      console.log(data);
      const { data: picture } = await axios.get(`https://api.github.com/users/${data[1].github}`);
      this.setState({ user: data, avatar: picture.avatar_url });
    } catch (e) {
      console.log(e);
    }
  }
  
  
  render() {
    console.log(this.state);
    if (this.state.user.length) {
      return (
        <Card>
          <Image src={this.state.avatar} wrapped ui={false} />
          <Card.Content>
      <Card.Header>{this.state.user[1].first_name} {this.state.user[1].last_name}</Card.Header>
            <Card.Meta>
              <span>Strength:{this.state.user[1].strength} </span>
              <br></br>
              <span>Weakness:{this.state.user[1].weakness} </span>
            </Card.Meta>
            <Card.Description>
             {this.state.user[1].bio}
      </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
        {this.state.user[1].email}
      </a>
          </Card.Content>
        </Card>

      );

    }
    else {
      return (
        <div>
          Loading...
        </div>
      )
    }
  }
}

export default UserCard;


