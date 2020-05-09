import React from 'react';
import { Grid, Icon, Header, Responsive } from 'semantic-ui-react';

const ProfileHeader = () => (
  <Grid.Row>
    <Grid.Column width={4}>
      <Responsive minWidth={768}>
        <Header as='h3' icon textAlign='center'><Icon name='user circle' />User Profile</Header>
      </Responsive>
    </Grid.Column>

    <Grid.Column>
      <Header as='h3' icon textAlign='center'><Icon name='users circle' />Code Frienders</Header>
    </Grid.Column>

  </Grid.Row>


);

export default ProfileHeader;
