import React from 'react';
import Party from './Party';

import { Route, Link } from 'react-router-dom';

const PartyList = (props) => {
    return (
        <div className='party-card'>
            {props.parties.map(party => {
                console.log(props)
                return (
                    <Link to={`/parties/${props.parties.id}`}>\
                        <Party parties={party} key={party.id} />
                    </Link>
                )
            })}
        </div>
    )
}

export default PartyList;