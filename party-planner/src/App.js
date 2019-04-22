import React, { Component } from "react";

import { Route } from 'react-router-dom';
import ModalContainer from "./components/Modal/ModalContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={ModalContainer} />
      </div>
    );
  }
}

export default App;
