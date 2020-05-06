import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

function UserProfile(props) {
    return (
        <Card color={props.color}>
          <Image src={props.user.badge} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{props.user.first_name} {props.user.last_name}</Card.Header>
            <Card.Meta>
              <span>Strength:{props.user.strength} </span>
              <br></br>
              <span>Weakness:{props.user.weakness} </span>
            </Card.Meta>
            <Card.Description>
              {props.user.bio}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
              <Icon name='user' />
              {props.user.email}
          </Card.Content>
        </Card>
    )
};

export default UserProfile;
