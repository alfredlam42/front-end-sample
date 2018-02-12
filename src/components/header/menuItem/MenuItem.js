import React, { Component } from 'react';

// Style
import './MenuItem.css';

export default class Menuitem extends Component {
  render(){
    return (
      <div className="header-menu-item">
        <div className="menu-item-name">{this.props.menuItemName}</div>
      </div>
    )
  }
}