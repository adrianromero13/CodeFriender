import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

class UserCard extends Component {
    state = {
    }
    render() {
        return (
            <div>
                <Card>
                    <Image src={props.avatar} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{props.firstLastName}</Card.Header>
                        <Card.Meta>
                            <span>{props.strength1} </span>
                            <span>{props.weakness1} </span>
                        </Card.Meta>
                        <Card.Description>
                            <span>{props.bio}</span>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a href={props.email}>
                            <Icon name='user' />
                            <span>{props.email}</span>
                        </a>
                    </Card.Content>
                </Card>
            </div>
        )
    };
};



export default UserCard;