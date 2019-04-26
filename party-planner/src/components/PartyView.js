import React from 'react';

import axios from 'axios';
import ShoppingList from './ShoppingList';
import TodoList from './TodoList';

class PartyView extends React.Component {
    state = {
        theme: '',
        date: '',
        budget: 0,
        guestCount: 0,
        todos: [],
        items: []
    }

    componentDidMount() {
        console.log('cdm props', this.props)
        axios.get(`https://party-planner-build-week.herokuapp.com/api/parties/${this.props.match.params.id}`)
        .then(res => {
            console.log('after',this.props.match.params.id,res.data)
            const {theme, date, budget, guestCount, todos, items} = res.data.party
            this.setState({theme, date, budget, guestCount, todos, items})
            console.log('state' ,this.state)
        })
        .catch(err => console.log(err));
    }

    render() {
        console.log('state',this.state)
        console.log('props', this.props)
        
        return (
            <div>
                <h2>individual party!!!!</h2>
                <div>
                    <h3>{this.state.budget}</h3>
                    <h3>{this.state.theme}</h3>
                </div>
                <ShoppingList />
                <TodoList todos={this.state.todos} />
            </div>
        )
    }
}

export default PartyView;