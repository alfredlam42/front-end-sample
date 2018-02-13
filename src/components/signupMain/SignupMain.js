import React, { Component } from 'react';

// Custom Components
import SignupForm from './signupForm/SignupForm';

// Style
import './SignupMain.css';

export default class SignupMain extends Component {
  render(){
    return (
      <div className="signup-body-main">
        <div className="signup-body-main-wrapper">
          <div className="signup-title">Sign up for Team account</div>

          <div className="signup-text">
            Create an account to keep track of your customers, and contributors. Already have an account?&nbsp;
            <a href="#">Log in here</a>
          </div>

          <SignupForm formData={this.props.formData} dispatch={this.props.dispatch} />
        </div>
      </div>
    )
  }
}