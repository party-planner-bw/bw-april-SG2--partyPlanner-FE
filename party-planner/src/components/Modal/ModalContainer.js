import React from 'react';
import axios from 'axios';

import Modal from './Modal';

class ModalContainer extends React.Component {
    
    state = {
        isShowing: false,
        username: '',
        password: ''
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


    signUp = e => {
      e.preventDefault();
      const endpoint = 'http://localhost:3300/api/register'
      axios.post(endpoint, this.state)
      .then(res => {console.log('SIGN UP RESPONSE', res.data)
      localStorage.setItem('token', res.data.password)})
      .catch(error => {console.log('SIGN UP ERROR', error)})
    }

    handleInputChange = e => {
      const {name,value} = e.target
      this.setState({[name]: value})
    }
  
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
          <input className="username" name="username" placeholder="Username" type="text" value={this.state.username}
          onChange={this.handleInputChange}
          />
          <input className="password" name="password" placeholder="Password" type="password" value={this.state.password}
          onChange={this.handleInputChange}
          />
          <button onClick={this.signUp}>Sign up</button>
          </Modal>
        </div>
      );
    }
  }

  export default ModalContainer;