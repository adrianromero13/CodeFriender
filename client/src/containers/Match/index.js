import React, { Component } from 'react';
import axios from 'axios';
// import { Form, Input, TextArea, Button, Select, Container, Grid } from 'semantic-ui-react';

import UserProfile from '../../components/UserProfile';
import { Grid, Header, Container } from 'semantic-ui-react';
import SideBarProfile from '../../components/SideBarProfile';


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
            <Container >
                    {/* currentUser Profile Card */}
                    <UserProfile color={'olive'} user={this.state.currentUser} />

            <Grid columns='four'>
                <Grid.Row columns={3}>
                    {/* map bestMatches from state */}
                    <div>
                    <Header>Best Matches</Header>
                    {this.state.bestMatches.length && this.state.bestMatches.map((user,idx) => <UserProfile color={'red'} user={user} key={idx} />)}
                    </div>
                </Grid.Row>
                <Grid.Row columns={3}>
                    {/* map mtchesForThem from state */}
                    <div>
                    <Header>Best Matches For Them</Header>
                    {this.state.matchesForThem.length && this.state.matchesForThem.map((user,idx) => <UserProfile color={'purple'} user={user} key={idx} />)}
                    </div>
                </Grid.Row>
                <Grid.Row columns={3}>
                    {/* map mtchesForMe from state */}
                    <div>
                    <Header>Best Matches For Me</Header>
                    {this.state.matchesForMe.length && this.state.matchesForMe.map((user,idx) => <UserProfile color={'teal'} user={user} key={idx} />)}
                    </div>
                </Grid.Row>
            </Grid>

            </Container>

        )
    }
}

export default Match;