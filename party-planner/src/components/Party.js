import React from 'react';

class Party extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.parties.theme}</h2>
                <h2>{this.props.parties.date}</h2>
                <h2>{this.props.parties.budget}</h2>
                <h2>{this.props.parties.guestCount}</h2>
            </div>
        )
    }
}

export default Party;