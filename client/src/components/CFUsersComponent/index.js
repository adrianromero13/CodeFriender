import React, { Component } from 'react';
import { Grid, Card, Icon, Image, } from 'semantic-ui-react';

import _ from 'lodash';

class CFUsersComponent extends Component {

    render() {

        return (
            
                <Card key={this.props.codeFrienderUsers.id}>
                    <Image src={this.props.codeFrienderUsers.badge} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{this.props.codeFrienderUsers.first_name} {this.props.codeFrienderUsers.last_name}</Card.Header>
                        <Card.Meta>
                            <span>Strength:{this.props.codeFrienderUsers.strength} </span>
                            <br></br>
                            <span>Weakness:{this.props.codeFrienderUsers.weakness} </span>
                        </Card.Meta>
                        <Card.Description>
                            {this.props.codeFrienderUsers.bio}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='user secret' />
                            {this.props.codeFrienderUsers.email}
                        </a>
                    </Card.Content>
                </Card>
            

        )
    }
};


export default CFUsersComponent;