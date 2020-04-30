import React, { Component } from 'react';

class Match extends Component {

    state = {
        users: []
    }

    componentDidMount() {
        const { data } = await axios.get('/api/ucbxusers/');
        this.setState({ users: data })
    }

    // function handleBtnClick(event) {
    //     // Get the title of the clicked button
    //     const btnName = event.target.getAttribute("data-value");
    //     if (btnName === "next") {
    //       const newUserIndex = userIndex + 1;
    //       nextUser(newUserIndex);
    //     } else {
    //       const newUserIndex = userIndex - 1;
    //       previousUser(newUserIndex);
    //     }
    //   }

    renderCards = () => {
        if (this.state.users.length === 0) {
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
                {this.renderCards()}
            </div>
        );
    }
}
};

export default Match;
