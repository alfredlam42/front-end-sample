import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

// Style
import './SubscriptionButton.css';

export default class SubscriptionButton extends Component {
  renderCheck(){
    const selectedOption = this.props.selectedOption;

    if (selectedOption){
      return <FontAwesome name="check" />
    }
  }

  render(){
    const selectedOption = this.props.selectedOption;

    return (
      <div className={selectedOption ? 'subscription-button selected' : 'subscription-button'}>
        <div className="radio-space">{this.renderCheck()}</div>
        <div className="subscription-type">{this.props.subscriptionType}</div>
        <div className="subscription-price">$ {this.props.price}</div>
        <div className="subscription-savings">{this.props.savings}</div>
        <div className="subscription-caption">{this.props.caption}</div>
      </div>
    )
  }
}