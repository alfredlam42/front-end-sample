import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

// Components
import MenuItem from './menuItem/MenuItem';

// Style
import './Header.css';

export default class Header extends Component {
  render(){
    return (
      <div className="header">
        <div className="header-remove">
          <FontAwesome name="times" />
        </div>

        <div className="header-menu">
          <MenuItem menuItemName='Pricing' />
          <MenuItem menuItemName='About Us' />
          <MenuItem menuItemName='Home' />
        </div>
      </div>
    )
  }
}