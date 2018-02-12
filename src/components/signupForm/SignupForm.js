import React, { Component } from 'react';

// Custom Components
import SubscriptionButton from './subscriptionButton/SubscriptionButton';

// Style
import './SignupForm.css';

export default class SignupForm extends Component {
  render(){
    return (
      <div className="signup-form">
        <form>
          <div className="signup-subscriptions">
            <SubscriptionButton
              subscriptionType="Annual"
              price="172"
              savings="Save 20% - $ 3.66 per month"
              caption="Yearly Subscription"
            />

            <SubscriptionButton
              subscriptionType="Monthly"
              price="18"
              caption="Monthly Subscription"
            />
          </div>

          <input
            type="text"
            placeholder="Full Name"
            value={this.props.fullName}
          />

          <input
            type="text"
            placeholder="Email"
            value={this.props.email}
          />

          <input
            type="text"
            placeholder="Password"
            value={this.props.password}
          />

          <div className="signup-submit">
            <button type="submit">Get Started</button>
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