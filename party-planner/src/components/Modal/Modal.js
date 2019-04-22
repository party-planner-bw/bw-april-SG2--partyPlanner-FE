import React from "react";

import { Link } from 'react-router-dom';
 
import "./Modal.css";

const modal = props => {
  
  return (
    <div>
      <div
        className="modal-wrapper"
        style={{
          transform: props.show ? "translateY(0vh)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        <div className="modal-header">
          <h3>Party Planner</h3>
          <span className="close-modal-btn" onClick={props.close}>
            ×
          </span>
        </div>
        <div className="modal-body">
          <p>{props.children}</p>
        </div>
        <div className="modal-footer">
          <Link to='/signUpPage' onClick={props.close} className="btn-cancel">
            SIGN UP
          </Link>
          <button className="btn-continue">LOGIN</button>
        </div>
      </div>
    </div>
  );
};

export default modal;
