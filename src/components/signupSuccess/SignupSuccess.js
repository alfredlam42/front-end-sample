import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

// Style
import './SignupSuccess.css';

export default class App extends Component {
  render(){
    return (
      <div className="signup-success">
        <div className="success-icon"><FontAwesome name="check" size="3x" /></div>
        <div className="success-text">Your account has been successfully created.</div>
      </div>
    )
  }
}