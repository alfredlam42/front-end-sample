import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

// Helpers
import { updateSubscription } from '../../../../js/actions/signupFormActions';

// Style
import './SubscriptionButton.css';

export default class SubscriptionButton extends Component {
  _onClick(){
    const subscriptionType = this.props.subscriptionType;

    this.props.dispatch(updateSubscription(subscriptionType));
  }

  renderCheck(isSelected){
    if (isSelected){
      return <FontAwesome name="check" />
    }
  }

  render(){
    const isSelected = this.props.subscriptionType === this.props.currentSubscription;

    return (
      <div
        className={isSelected ? 'subscription-button selected' : 'subscription-button'}
        onClick={this._onClick.bind(this)}
      >
        <div className="radio-space">{this.renderCheck(isSelected)}</div>
        <div className="subscription-type">{this.props.subscriptionType}</div>
        <div className="subscription-price">$ {this.props.price}</div>
        <div className="subscription-savings">{this.props.savings}</div>
        <div className="subscription-caption">{this.props.caption}</div>
      </div>
    )
  }
}