import React from 'react';
import axios from 'axios';
import UserCard from './../../components/UserCard'

class RenderCards extends Component {
    state = {
      users: []
    }
  
  
    componentDidMount() {
      const { data } = await axios.get('/api/ucbxusers/');
      console.log(data);
      this.setState({ users: data })
    }
    
  
    renderCards = () => {
      if(this.state.users.length === 0) {
        return <p> Loading</p>
      } else {
        return this.state.users.map(user => {
          <UserCard id={user.id} />
        })
      }
    }
  
  
    render() {
        return (
          <div>
           { this.renderCards() }
          </div>
        );
    }
  }

  export default RenderCards;