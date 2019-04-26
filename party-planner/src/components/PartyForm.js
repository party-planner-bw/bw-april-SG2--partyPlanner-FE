import React from 'react';
import axios from 'axios';

class PartyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                theme: '',
                date: '',
                budget: 0,
                guestCount: 0
            }
    }

    // addParty = e => {
    //     e.preventDefault();
    //     if (localStorage.getItem('token')) {
    //         this.setState({
    //             loggedOn: true
    //         });
    //     } else {
    //         this.setState({
    //             loggedIn: false
    //         })
    //     }
    //     axios.post('https://party-planner-build-week.herokuapp.com/api/parties', {
    //         theme: this.state.theme,
    //         date: this.state.date,
    //         budget: this.state.budget,
    //         guestCount: this.state.guestCount
    //     })
    //         .then(res => { this.setState({ parties: res.data }) })
    //         .catch(err => console.log(err));
    //     this.setState({
    //         theme: '',
    //         date: '',
    //         budget: '',
    //         guestCount: ''
    //     });
    // }

    handleInputChange = e => {
        // console.log(e.target.name)
        // console.log('value',e.target.value)
        // e.persist();
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log('link was clicked')
        // console.log('submigt',this.state)
        // e.persist();

        this.props.addParties(e, this.state)
        // this.setState({
        //     party: {
        //         theme: '',
        //         date: '',
        //         budget: 0,
        //         guestCount: 0
        //     }
        // }) 
        // console.log(this.state.party)
    }

    render() {
        return (
            <div className='party-form'>
            <h2>Add party form</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleInputChange}
                        placeholder='Theme'
                        value={this.state.theme || ''}
                        name='theme'
                        type="text"
                    />
                    <input
                        onChange={this.handleInputChange}
                        placeholder='Date'
                        value={this.state.date || ''}
                        name='date'
                        type="text"
                    />
                    <input
                        onChange={this.handleInputChange}
                        placeholder='Budget'
                        value={this.state.budget || 0}
                        name='budget'
                        type="int"
                    />
                    <input
                        onChange={this.handleInputChange}
                        placeholder='Guest Count'
                        value={this.state.guestCount || 0}
                        name='guestCount'
                        type="int"
                    />
                    <button type='submit' onClick={this.handleSubmit} >Add New Party</button>
                </form>
            </div>
        );
    }
}

export default PartyForm;