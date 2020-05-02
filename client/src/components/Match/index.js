import React, { Component } from 'react';
import axios from 'axios';
import { Form, Input, TextArea, Button, Select, Container, Grid } from 'semantic-ui-react';

import UserProfile from '../UserProfile';


class Match extends Component {
    state = {
        currentUser: {},
        bestMatches: [],
        matchesForThem: [],
        matchesForMe: [],
    }

    async componentDidMount() {
        await this.getCurrentUser();
    }

    getCurrentUser = async () => {
        try {
            const { data } = await axios.get('/api/ucbxusers')
            let currentUser = this.props.history.location.state && this.props.history.location.state.newUser
                ? this.props.history.location.state.currentUser
                : data.slice(data.length - 1, data.length);
            console.log(currentUser[0])
            this.getBestMatches(currentUser[0]);
            this.getMatchesForThem(currentUser[0]);
            this.getMatchesForMe(currentUser[0]);
            this.setState({ currentUser: currentUser[0] });
        } catch (e) {
            console.log(e);
        }
    }

    getBestMatches = async (currentUser) => {
        try {
            console.log(currentUser)
            const { data } = await axios.post('/api/ucbxusers/bestmatches', { currentUser })
            this.setState({ bestMatches: data })
        } catch (e) {
            console.log(e);
        }
    }

    getMatchesForThem = async (currentUser) => {
        try {
            console.log(currentUser)
            const { data } = await axios.post("/api/ucbxusers/matchesforthem", { currentUser })
            this.setState({ matchesForThem: data })
        } catch (e) {
            console.log(e)
        }
    }


    getMatchesForMe = async (currentUser) => {
        try {
            console.log(currentUser)
            const { data } = await axios.post("/api/ucbxusers/matchesforme", { currentUser })
            this.setState({ matchesForMe: data })
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    {/* currentUser Profile Card */}
                    <UserProfile user={this.state.currentUser} />
                </div>
                <div className="row">
                    {/* map bestMatches from state */}
                    <h1>Best Matches</h1>
                    {this.state.bestMatches.length && this.state.bestMatches.map((user,idx) => <UserProfile user={user} key={idx} />)}
                </div>
                <div className="row">
                    {/* map mtchesForThem from state */}
                    <h1>Best Matches For Them</h1>
                    {this.state.matchesForThem.length && this.state.matchesForThem.map((user,idx) => <UserProfile user={user} key={idx} />)}
                </div>
                <div className="row">
                    {/* map mtchesForMe from state */}
                    <h1>Best Matches For Me</h1>
                    {this.state.matchesForMe.length && this.state.matchesForMe.map((user,idx) => <UserProfile user={user} key={idx} />)}
                </div>
            </div>

        )
    }
}

export default Match;

        // <div>
        //     <Form.Field
        //         id='form-input-control-error-github'
        //         control={Input}
        //         label='Github Username'
        //         placeholder='janey123'
        //         onChange={this.handleInputChange}
        //         value={this.state.github}
        //         name='github'
        //     />
        //     <Form.Field
        //         id='form-button-control-public'
        //         control={Button}
        //         content='Submit'
        //         label='Click to Submit'
        //         onClick={this.handleSubmit}
        //     />

        // </div>

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