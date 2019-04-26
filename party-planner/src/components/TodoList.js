import React from 'react';
import axios from 'axios';

import Todo from './Todo';


class TodoList extends React.Component {
    state = {
      todos: []
  }


  fetchParties = id => {
    axios 
    .get(`https://party-planner-build-week.herokuapp.com/api/parties/${id}`)
    .then(res => {
      // console.log("\n\nRES",res)
      // console.log("todo",res.data.todo)
      this.setState({todos: res.data.party.todos
      })})
    .catch(err => console.log(err))
  }

  // addParties = (e, item) => {
  //   e.preventDefault();
  //   axios
  //     .post('https://party-planner-build-week.herokuapp.com/api/parties', item)
  //     .then(res => {
  //       this.setState({ todos: res.data.todo })
  //       this.props.history.push('/todo');
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  // deleteParties = (e, id) => {
  //   e.preventDefault();
  //   axios
  //   .delete(`https://party-planner-build-week.herokuapp.com/api/parties/${id}`)
  //   .then(res => {
  //     this.setState({
  //       todos: res.data
  //     })
  //   })
  //   .catch(err => console.log(err))
  // }

  componentDidMount() {
    console.log('before',this.props)
    // this.fetchParties(this.props.match.params)
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match !== undefined )
    // if (this.props.match.params !== newProps.match.params) {
      this.fetchParties(newProps.match.params.id);
    // }
  }



  onSubmitHandle(event) {
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos, {
          id: Date.now(),
          title: event.target.item.value,
          done: false,
          date: new Date()
      }]
    });
    event.target.item.value = '';
  }

  onDeleteHandle() {
    let id = arguments[0];
    this.setState({
      todos: this.state.todos.filter(item => {
        if (item.id !== id) {
          return item;
        }
      })
    });
  }

  renderEditForm() {
    if (this.state.edit) {
      return <form onSubmit={this.onUpdateHandle.bind(this)}>
        <input type="text" name="updatedItem" className="item" defaultValue={this.state.title} />
        <button className="update-add-item">Update</button>
      </form>
    }
  }

  onEditHandle(event) {
    this.setState({
      edit: true,
      id: arguments[0],
      title: arguments[1]
    });
  }

  onUpdateHandle(event) {
    event.preventDefault();
    this.setState({
      todos: this.state.todos.map(item => {
          if (item.id === this.state.id) {
            item['title'] = event.target.updatedItem.value;
            return item;
          }
          return item;
        })
     });
     this.setState({
        edit: false
     });
  }

//   onCompleteHandle() {
//     let id = arguments[0];
//     this.setState({
//       mockData: this.state.items.map(item => {
//         if (item.id === id) {
//           item['done'] = true;
//           return item;
//         }
//       return item;
//     })
//   });
// }

  render() {
    return (
      <div>
          <h2>Todo List</h2>
        <form onSubmit={this.onSubmitHandle.bind(this)}>
          <input type="text" name="item" className="item" />
          <button className="btn-add-item">Add</button>
        </form>
        <div>
          

            <div>
            {this.props.todos.map(todo => (

              <Todo todos={todo.todo} key={todo.id} id={todo.id} party_id={todo.party_id}  />
            ))}
            </div>
            {/* // <Todo todos={item} key={item.id} addParties={this.addParties} /> */}
          
            
            {/* // <li key={item.id} className={ item.done ? 'done' : 'hidden' }>
            //   {item.title}
            //   <button onClick={this.onEditHandle.bind(this, item.id, item.title)}>Edit</button>
            //   <button onClick={this.onDeleteHandle.bind(this, item.id)}>Complete</button>
            // </li> */}
        </div>
        {this.renderEditForm()}
      </div>
    );
  }
}

export default TodoList;