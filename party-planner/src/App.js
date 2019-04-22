import React, { Component } from "react";

import { Route } from 'react-router-dom';

import ModalContainer from "./components/Modal/ModalContainer";
import PartyList from './components/PartyList';
import SignUpPage from "./components/SignUpPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={ModalContainer} />
        <Route path="/signUpPage" component={SignUpPage} />
        <Route path="/partylist" component={PartyList} />
      </div>
    );
  }
}

export default App;