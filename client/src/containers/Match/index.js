import React, { Component } from 'react';
import axios from 'axios';
// import { Form, Input, TextArea, Button, Select, Container, Grid } from 'semantic-ui-react';

import UserProfile from '../../components/UserProfile';
import { Grid } from 'semantic-ui-react';


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
            <Grid columns='three'>
                <Grid.Row >
                    {/* currentUser Profile Card */}
                    <UserProfile user={this.state.currentUser} />
                </Grid.Row>
                <Grid.Row columns={3}>
                    {/* map bestMatches from state */}
                    <h1>Best Matches</h1>
                    {this.state.bestMatches.length && this.state.bestMatches.map((user,idx) => <UserProfile user={user} key={idx} />)}
                </Grid.Row>
                <Grid.Row columns={3}>
                    {/* map mtchesForThem from state */}
                    <h1>Best Matches For Them</h1>
                    {this.state.matchesForThem.length && this.state.matchesForThem.map((user,idx) => <UserProfile user={user} key={idx} />)}
                </Grid.Row>
                <Grid.Row columns={3}>
                    {/* map mtchesForMe from state */}
                    <h1>Best Matches For Me</h1>
                    {this.state.matchesForMe.length && this.state.matchesForMe.map((user,idx) => <UserProfile user={user} key={idx} />)}
                </Grid.Row>
            </Grid>

        )
    }
}

export default Match;