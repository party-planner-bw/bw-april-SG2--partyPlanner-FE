import React from 'react';
import axios from 'axios';

class Todo extends React.Component {
    state = {
        todos: []
    }


    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('hs prpops',this.props)
        axios
        .put(`https://party-planner-build-week.herokuapp.com/api/todos/${this.props.party_id}`, {
            todo: this.state.todo
        })
        .then(res => {
            console.log('statee',this.state)
            // window.location = `/api/todos/${this.props.match.params.id}`
            window.location.reload()
        })
        .catch(err => {
            console.log(err)
        })
    }

    // toggleComplete = e => {
    //     e.preventDefault();
    //     this.setState({

    //     })
    // }

    

render() {
    return (
        <div>
            {this.props.todos}
            <input name="todo" type="text" value={this.state.todo} placeholder="todo" onChange={this.handleChange} />
            <button onClick={this.handleSubmit} type="submit">Update</button>
            <button>Completed</button>
        </div>
    )
}

      
}

export default Todo;