
import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
// import Clipboard from './../../components/Clipboard';

const Match = (props) => {
    return(
        <Card key={props.id}>
        <Image src={props.badge} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{props.first_name} {props.last_name}</Card.Header>
          <Card.Meta>
            <span>Strength:{props.strength} </span>
            <br></br>
            <span>Weakness:{props.weakness} </span>
          </Card.Meta>
          <Card.Description>
            {props.bio}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            {props.email}
          </a>
        </Card.Content>
      </Card>
    )

// class Match extends Component {
//   state = {
//     user: [],
//     avatar: '',
//   }

//   async componentDidMount() {
//     try {
//       //  should only get 1 user here
//       const { data } = await axios.get('/api/ucbxusers')
//       console.log(data);
//       // if data is an array, you can use .map
//       // if data is an object, you can use a for...in loop
//       // const { data: picture } = await axios.get(`https://api.github.com/users/${data[10].github}`);
//       // this.setState({ user: data, avatar: picture.avatar_url });
//       this.setState({ user: data });
//       console.log(this.state.user);
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   renderUserCard() {
//       this.state.user.map(currentUser => {
//         return (
//           <Card key={currentUser.id}>
//             <Image src={currentUser.badge} wrapped ui={false} />
//             <Card.Content>
//               <Card.Header>{currentUser.first_name} {currentUser.last_name}</Card.Header>
//               <Card.Meta>
//                 <span>Strength:{currentUser.strength} </span>
//                 <br></br>
//                 <span>Weakness:{currentUser.weakness} </span>
//               </Card.Meta>
//               <Card.Description>
//                 {currentUser.bio}
//               </Card.Description>
//             </Card.Content>
//             <Card.Content extra>
//               <a>
//                 <Icon name='user' />
//                 {currentUser.email}
//               </a>
//             </Card.Content>
//           </Card>
//         )
//       })
//   }


//   render() {
//     console.log(this.state);
//     return (
//     <div>{this.state.user.map(currentUser => (
        // <Card key={currentUser.id}>
        //   <Image src={currentUser.badge} wrapped ui={false} />
        //   <Card.Content>
        //     <Card.Header>{currentUser.first_name} {currentUser.last_name}</Card.Header>
        //     <Card.Meta>
        //       <span>Strength:{currentUser.strength} </span>
        //       <br></br>
        //       <span>Weakness:{currentUser.weakness} </span>
        //     </Card.Meta>
        //     <Card.Description>
        //       {currentUser.bio}
        //     </Card.Description>
        //   </Card.Content>
        //   <Card.Content extra>
        //     <a>
        //       <Icon name='user' />
        //       {currentUser.email}
        //     </a>
        //   </Card.Content>
        // </Card>
    //   )
    // )}</div>
      // <div>
      //   { this.state.user.length 
      //       ? this.renderUserCard() 
      //       : <div><p>Loading...</p></div>
      //     }
      // </div>
//     )
//   }
}

export default Match;
