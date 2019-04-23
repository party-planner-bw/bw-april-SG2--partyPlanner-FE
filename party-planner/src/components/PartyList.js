import React from 'react';
import Party from './Party';

const PartyList = (props) => {
    return (
        <div className='party-card'>
            {props.parties.map(party => {
                return (
                    <Party parties={party} />
                )
            })}
        </div>
    )
}

export default PartyList;