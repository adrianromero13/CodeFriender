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