import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Header extends Component {

  // sidebarToggle(e) {
  //   e.preventDefault();
  //   document.body.classList.toggle('sidebar-hidden');
  // }

  // sidebarMinimize(e) {
  //   e.preventDefault();
  //   document.body.classList.toggle('sidebar-minimized');
  // }

  // mobileSidebarToggle(e) {
  //   e.preventDefault();
  //   document.body.classList.toggle('sidebar-mobile-show');
  // }

  // asideToggle(e) {
  //   e.preventDefault();
  //   document.body.classList.toggle('aside-menu-hidden');
  // }

  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <NavLink to={'/'} className="navbar-brand">Console</NavLink>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
            <ul className="nav navbar-nav">
              <li><NavLink to={'/dashboard'} className="nav-link" activeClassName="active">Dashboard</NavLink></li>
              <li><NavLink to={'/users'} className="nav-link" activeClassName="active">Users</NavLink></li>
              <li><NavLink to={'/settings'} className="nav-link" activeClassName="active">Settings</NavLink></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><NavLink to={'/aboutme'} className="nav-link" activeClassName="active">About me</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;