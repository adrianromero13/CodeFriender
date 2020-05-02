import React, { Component } from 'react';
import axios from 'axios';
import { Form, Input, TextArea, Button, Select, Container, Grid } from 'semantic-ui-react';


class Match extends Component {
    state = {
        github: ""
    }

        handleInputChange = (e, data) => {
            // Getting the value and name of the input which triggered the change
            
            const { name, value } = data;
            // console.log(data);
            // Updating the input's state
            this.setState({
              [name]: value
            });
        }    
        handleSubmit = (e) => {
            e.preventDefault();
            
            console.log("Match",this.state);
            // The second parameter to this post request is going to become req.body
            axios.get('/api/ucbxusers/github/'+this.state.github)
            .then(response => {
              console.log(response);
            })
        }    
    render() {
        return (<div>
            <Form.Field
                id='form-input-control-error-github'
                control={Input}
                label='Github Username'
                placeholder='janey123'
                onChange={this.handleInputChange}
                value={this.state.github}
                name='github'
            />
            <Form.Field
              id='form-button-control-public'
              control={Button}
              content='Submit'
              label='Click to Submit'
              onClick={this.handleSubmit}
              />
        
        </div>)
    }
}
export default Match;


// currentUser: {
//     name: "",
//     github: "",
//     strength: "HTML"
// }

// allUsers: [
//     {
//         name: "",
//         github: "",
//         weakness: "HTML"
//     },
//     {
//         name: "",
//         github: "",
//     }
// ]


// create new Profile container
// inside Profile
//     render 
//         BestMatches - 2pts - users where strength and weakness match
//             In CDM - axios call to get users with matching strength + weakness
//             save to state
//             render to page
//         BestMatchesForThem - 1pt - users where strength matches to weakness 
//             In CDM - axios call to get users with matching strength + weakness
//             save to state
//             render to page
//         BestMatchesForMe - 1pt - users where weakness matches to strength
//             In CDM - axios call to get users with matching strength + weakness
//             save to state
//             render to page

//mysql way
// select * from ucbxusers where strength = current weakness
//

// Mark
// S: HTML
// W: CSS

// Musa
// S: JS
// W: HTML

// Adrian:
// S: CSS
// W: JS

// Armande
// S: CSS
// W: HTML

// CurrentUser: Mark
// BestMatch - Mark and Armande are a 2 point match
// BestMatchForThem - Mark and Musa are a 1 point match because not both cases are satisfied
// BestMatchForMe - Mark and Adrian are a 1 point match because not both cases are satisfied