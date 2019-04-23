import React from "react";
import axios from "axios";

import Modal from "./Modal";

class ModalContainer extends React.Component {
  state = {
    isShowing: false,
    username: "",
    password: ""
  };

  openModalHandler = () => {
    this.setState({
      isShowing: true
    });
  };

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  loginHandler = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const USER = { username, password };
    console.log('logging');
    axios
      .post("http://localhost:3300/api/login", USER)
      .then(res => {
        localStorage.setItem("token", res.data.token)
      })
      .catch(err => {
        console.log(err)
      })
  }

  signUp = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const USER = { username, password };
    console.log(username);
    axios
      .post("http://localhost:3300/api/register", USER)
      .then(res => {
        localStorage.setItem("token", res.data.password);
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        {this.state.isShowing ? (
          <div onClick={this.closeModalHandler} className="back-drop" />
        ) : null}

        <button className="open-modal-btn" onClick={this.openModalHandler}>
          Open Modal
        </button>

        <Modal
          className="modal"
          show={this.state.isShowing}
          close={this.closeModalHandler}
        >
          <input
            className="username"
            name="username"
            placeholder="Username"
            type="text"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <input
            className="password"
            name="password"
            placeholder="Password"
            type="password"
            value={this.state.password}
            onChange={this.changeHandler}
          />
          <button onClick={this.signUp}>Sign up</button>
          <button onClick={this.loginHandler}>login</button>
        </Modal>
      </div>
    );
  }
}

export default ModalContainer;
