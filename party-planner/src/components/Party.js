import React from 'react';

import { NavLink, Route } from 'react-router-dom';

import PartyView from './PartyView';

class Party extends React.Component {
    render() {
        return (
            <div>
                <NavLink to={`/api/parties/${this.props.parties.id}`} className="partyText">
                <div>
                    <h2>{this.props.parties.theme}</h2>
                    <h2>{this.props.parties.date}</h2>
                    <h2>{this.props.parties.budget}</h2>
                    <h2>{this.props.parties.guestCount}</h2>
                </div>
                </NavLink>
                <Route path={`/api/parties/${this.props.parties.id}`} render={props => (<PartyView {...props} />)} />
            </div>
        )
    }
}

export default Party;