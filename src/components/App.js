import React, { Component } from 'react';
import { connect } from 'react-redux';

// Custom Components
import Header from './header/Header';
import SignupMain from './signupMain/SignupMain';
import SignupSuccess from './signupSuccess/SignupSuccess';

// Style
import './App.css';

@connect((store) => {
  return {
    formData: store.signupForm.formData,
    postStatus: store.signupForm.postStatus,
    tab: store.tab,
  }
})
export default class App extends Component {
  displaySignupBody(){
    const { postStatus } = this.props;

    if (!postStatus){
      return <SignupMain formData={this.props.formData} dispatch={this.props.dispatch} />
    } else {
      return <SignupSuccess />;
    }
  }

  render(){
    return (
      <div className="signup-tab">
        <Header />

        <div className="signup-body">
          {this.displaySignupBody()}
        </div>
      </div>
    )
  }
}