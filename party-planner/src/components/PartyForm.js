import React from 'react';
import Axios from 'axios';
import { truncate } from 'fs';

class PartyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parties: [],
            theme: '',
            date: '',
            budget: '',
            guestCount: ''
        }
    }

    addParty = e => {
        e.preventDefault();
        if (localStorage.getItem('token')) {
            this.setState({
                loggedOn: true
            });
        } else {
            this.setState({
                loggedIn: false
            })
        }
        Axios.post('https://party-planner-build-week.herokuapp.com/api/parties', {
            theme: this.state.theme,
            date: this.state.date,
            budget: this.state.budget,
            guestCount: this.state.guestCount
        })
            .then(res => { this.setState({ parties: res.data }) })
            .catch(err => console.log(err));
        this.setState({
            theme: '',
            date: '',
            budget: '',
            guestCount: ''
        });
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div className='party-form'>
                <form onSubmit={this.AddParty}>
                    <input
                        onChange={this.handleInputChange}
                        placeholder='Theme'
                        value={this.state.theme}
                        name='theme'
                    />
                    <input
                        onChange={this.handleInputChange}
                        placeholder='Date'
                        value={this.state.date}
                        name='date'
                    />
                    <input
                        onchange={this.handleInputChange}
                        placeholder='Budget'
                        value={this.state.budget}
                        name='budget'
                    />
                    <input
                        onchange={this.changeInputHandler}
                        placeholder='Guest Count'
                        value={this.state.guestCount}
                        name='guestCount'
                    />
                    <button type='submit'>Add New Party</button>
                </form>
            </div>
        );
    }
}

export default PartyForm;