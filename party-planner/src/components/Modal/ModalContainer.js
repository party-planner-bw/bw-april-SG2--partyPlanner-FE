import React from 'react';

import Modal from './Modal';

class ModalContainer extends React.Component {
    constructor() {
      super();
  
      this.state = {
        isShowing: false
      };
    }
  
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
          <input className="username" name="username" placeholder="Username" type="text" />
          <input className="password" name="password" placeholder="Password" type="password" />
          </Modal>
        </div>
      );
    }
  }

  export default ModalContainer;