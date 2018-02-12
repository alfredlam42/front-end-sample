import React, { Component } from 'react';

// Custom Components
import Header from './header/Header';
import SignupForm from './signupForm/SignupForm';

// Style
import './App.css';

export default class App extends Component {
  render(){
    return (
      <div className="signup-tab">
        <Header />

        <div className="signup-body">
          <div className="signup-body-wrapper">
            <div className="signup-title">Sign up for Team account</div>

            <div className="signup-text">
              Create an account to keep track of your customers, and contributors. Already have an account?&nbsp;
              <a href="#">Log in here</a>
            </div>

            <SignupForm />
          </div>
        </div>
      </div>
    )
  }
}