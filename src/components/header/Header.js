import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

// Components
import MenuItem from './menuItem/MenuItem';

// Style
import './Header.css';

export default class Header extends Component {
  renderMenuItems(menuItems){
    const currentTab = this.props.currentTab;

    return menuItems.map((itemName) => {
      return (
        <MenuItem
          key={itemName}
          menuItemName={itemName}
        />
      )
    })
  }

  render(){
    const menuItems = ['Pricing', 'About Us', 'Home'];

    return (
      <div className="header">
        <div className="header-remove">
          <FontAwesome name="times" />
        </div>

        <div className="header-menu">
          {this.renderMenuItems(menuItems)}
        </div>
      </div>
    )
  }
}