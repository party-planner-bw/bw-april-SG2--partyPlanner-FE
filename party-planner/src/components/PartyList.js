import React from 'react';
import Party from './Party';

import { Link } from 'react-router-dom';

const PartyList = (props) => {
    console.log('props',props)
    return (
        <div className='party-card'>
            {props.parties.map(party => {
                
                console.log('parties id', props.parties.id)
                return (
                    // <Link to={`/parties/${props.parties.id}`} className="partyText">
                        <Party parties={party} key={party.id} />
                    // </Link>
                )
            })}
        </div>
    )
}

export default PartyList;