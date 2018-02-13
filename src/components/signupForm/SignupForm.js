import React, { Component } from 'react';

// Custom Components
import SubscriptionButton from './subscriptionButton/SubscriptionButton';

// Helpers
import * as form from '../../js/actions/signupFormActions';

// Style
import './SignupForm.css';

export default class SignupForm extends Component {
  validateFormData(){
    const { name, email, password, subscription } = this.props;

    return name && email && password && subscription ? true : false;
  }

  getClassButton(){
    const dataIsValid = this.validateFormData();

    return dataIsValid ? 'active' : 'inactive';
  }

  _onClickButton(event){
    event.preventDefault();
  }

  _onChangeInput(event){
    const inputValue = event.target.value;
    const field = event.target.name;

    switch (field){
      case 'name': {
        this.props.dispatch(form.updateName(inputValue));
        break;
      }
      case 'email': {
        this.props.dispatch(form.updateEmail(inputValue))
        break;
      }
      case 'password': {
        this.props.dispatch(form.updatePassword(inputValue))
        break;
      }
      default: {
        console.log('no field with that name');
      }
    }
  }

  render(){
    const currentSubscription = this.props.subscription;

    return (
      <div className="signup-form">
        <form>
          <div className="signup-subscriptions">
            <SubscriptionButton
              subscriptionType="Annual"
              price="172"
              savings="Save 20% - $ 3.66 per month"
              caption="Yearly Subscription"
              currentSubscription={this.props.subscription}
              dispatch={this.props.dispatch}
            />

            <SubscriptionButton
              subscriptionType="Monthly"
              price="18"
              caption="Monthly Subscription"
              currentSubscription={this.props.subscription}
              dispatch={this.props.dispatch}
            />
          </div>

          <input
            type="text"
            name="name"
            onChange={this._onChangeInput.bind(this)}
            placeholder="Full Name"
            value={this.props.name}
          />

          <input
            type="text"
            name="email"
            onChange={this._onChangeInput.bind(this)}
            placeholder="Email"
            value={this.props.email}
          />

          <input
            type="password"
            name="password"
            onChange={this._onChangeInput.bind(this)}
            placeholder="Password"
            value={this.props.password}
          />

          <div className="signup-submit">
            <button type="submit" className={this.getClassButton()}>Get Started</button>
            <div className="signup-tos">
              By clicking this button, you agree to the&nbsp;
              <a href="#">Terms and conditions.</a>
            </div>
          </div>

        </form>
      </div>
    )
  }
}