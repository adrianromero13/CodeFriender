import React, { Component } from 'react';
import axios from 'axios';

import { Form, Input, TextArea, Button, Select, Container } from 'semantic-ui-react';

class LoginForm extends Component {
    state = {
        firstName: "",
        lastName: "",
        strength: "",
        weakness: "",
        bio: "",
        email: "",
        github: "",
        badge: "",
    };

    handleInputChange = (e, data) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = data;
        // console.log(data);
        // Updating the input's state
        this.setState({
            [name]: value
        });
    };
    
    render() {
        return(
            <Container textAlign="justified">
        <Form>
            <Form.Group widths='equal'>
                <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    label='github'
                    placeholder='github'
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
            </Form.Group>
        </Form>
    </Container>);
    };

};

export default LoginForm;