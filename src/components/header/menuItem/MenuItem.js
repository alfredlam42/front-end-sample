import React, { Component } from 'react';
import { connect } from 'react-redux';

// Helpers
import { changeTab } from '../../../js/actions/tabActions';

// Style
import './MenuItem.css';

@connect((store) => {
  return {
    tab: store.tab,
  }
})
export default class Menuitem extends Component {
  _onClick(){
    this.props.dispatch(changeTab(this.props.menuItemName))
  }

  render(){
    const menuItemName = this.props.menuItemName;
    const currentTab = this.props.tab.currentTab;
    const isSelected = menuItemName === currentTab;

    return (
      <div
        className={'header-menu-item' + (isSelected ? ' selected' : '')}
        onClick={this._onClick.bind(this)}
      >
        <div className="menu-item-name">{this.props.menuItemName}</div>
      </div>
    )
  }
}