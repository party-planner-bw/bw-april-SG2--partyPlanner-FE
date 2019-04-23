import React, { Component } from "react";

import { Route } from 'react-router-dom';

import ModalContainer from "./components/Modal/ModalContainer";
import PartyList from './components/PartyList';
import SignUpPage from "./components/SignUpPage";


class App extends Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    return (
      <div className="App">
        <Route path="/" component={ModalContainer} />
        <Route path="/register" component={SignUpPage} />
        <Route path="/partylist" component={PartyList} />
      </div>
    );
  }
}

export default App;
