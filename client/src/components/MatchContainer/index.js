import React from 'react';
import Match from './../Match';

function MatchContainer({ id, badge, first_name, last_name, strength, weakness, bio, email }) {
    return(
        <div>
            <Match id={id}
            badge={badge}
            firstName={first_name}
            lastName={last_name}
            strength={strength}
            weakness={weakness}
            bio={bio}
            email={email} />
        </div>
    )
}

export default MatchContainer;