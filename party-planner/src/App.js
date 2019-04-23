import React, { Component } from "react";
import axios from 'axios';

import { Route } from 'react-router-dom';

import ModalContainer from "./components/Modal/ModalContainer";
import PartyList from './components/PartyList';
import SignUpPage from "./components/SignUpPage";

class App extends Component {
  state = {
    parties: []
}


componentDidMount() {
axios.get('https://party-planner-build-week.herokuapp.com/api/parties')
.then(res => {this.setState({parties: res.data}) })
.catch(err => console.log(err));
}

  render() {
    return (
      <div className="App">
        <PartyList parties={this.state.parties}/>
        <Route path="/" component={ModalContainer} />
        <Route path="/signUpPage" component={SignUpPage} />
        <Route path="/partylist" component={PartyList} />
      </div>
    );

  }
}

export default App;
