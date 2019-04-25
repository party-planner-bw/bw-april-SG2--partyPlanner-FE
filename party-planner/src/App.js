import React, { Component } from "react";
import axios from 'axios';

import { Route, NavLink } from 'react-router-dom';

import ModalContainer from "./components/Modal/ModalContainer";
import PartyList from './components/PartyList';
import SignUpPage from "./components/SignUpPage";
import ShoppingList from "./components/ShoppingList";
import TodoList from './components/TodoList';

import './App.css';
import PartyForm from "./components/PartyForm";
// import Party from "./components/Party";


class App extends Component {
  state = {
    parties: []
}


componentDidMount() {
axios.get('https://party-planner-build-week.herokuapp.com/api/parties')
.then(res => {this.setState({parties: res.data}) })
.catch(err => console.log(err));
}

addParties = (party) => {
  axios
    .post('https://party-planner-build-week.herokuapp.com/api/parties', party)
    .then(res => {
      console.log('add parties', res.data)
      this.setState({ parties: [...this.state.parties, res.data] })
    })
    .catch(err => {
      console.log(err)
    })
}

deleteParties = (e, id) => {
  e.preventDefault();
  axios
  .delete(`https://party-planner-build-week.herokuapp.com/api/parties/${id}`)
  .then(res => {
    this.setState({
      todos: res.data
    })
  })
  .catch(err => console.log(err))
}

  render() {
    return (
      <div className="App">
        <NavLink to="/partyForm" className="navLink">
          party form
        </NavLink>
        <NavLink to="/partyList" className="navLink">
          party list
        </NavLink>
        <NavLink to="/shoppingList" className="navLink">
          shopping List
        </NavLink>
        <NavLink to="/todoList" className="navLink">
          todo list
        </NavLink>
        
        <Route path="/" component={ModalContainer} />
        <Route path="/register" component={SignUpPage} />
        {/* <Route path="/partyList" component={PartyList} parties={this.state.parties} /> */}
        <Route path="/partyForm" render={props => ( <PartyForm {...props} addParties={this.addParties} />)} />
        <Route path="/api/parties/:id" render={props => ( <TodoList {...props} />)} />
        <Route path="/parties" render={props => ( <TodoList {...props} addParties={this.addParties} /> )} />
        <Route path="/shoppingList" render={props => ( <ShoppingList {...props}  />)} />
        <Route path="/partyList" render={props => ( <PartyList {...props} {...this.state} parties={this.state.parties} />)} />
      </div>
    );

  }
}

export default App;
