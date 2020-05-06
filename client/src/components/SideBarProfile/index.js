import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    Card,
    Icon,
    Image,
    Menu,
    Segment,
    Sidebar,
} from 'semantic-ui-react';

// SideBarProfile.propTypes = {
//     animation: PropTypes.string,
//     direction: PropTypes.string,
//     visible: PropTypes.bool,
// }
// , {animation, direction, visible,}
function SideBarProfile(props) {
    
    return(
        <Sidebar
        as={Menu}
        animation={'scale down'}
        direction={'left'}
        icon='labeled'
        inverted
        vertical
        visible={'true'}
        width='wide'
        >
            <Container>
                <br/>
                <br/>

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
            </Container>
        </Sidebar>

)
}


export default SideBarProfile;