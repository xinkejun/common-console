import React, { Component } from 'react';

class Settings extends Component {

  // constructor(props) {
  //   super(props);

  //   this.toggle = this.toggle.bind(this);
  //   this.state = {
  //     dropdownOpen: false
  //   };
  // }

  // toggle() {
  //   this.setState({
  //     dropdownOpen: !this.state.dropdownOpen
  //   });
  // }

  render() {
    return (
      <div>
        <div className="col-lg-2">
          <div className="list-group">
            <a href="#" className="list-group-item active">Setting 1</a>
            <a href="#" className="list-group-item">Setting 2</a>
            <a href="#" className="list-group-item">Setting 3</a>
          </div>
        </div>
        <div className="col-lg-10">
          Settings
        </div>
      </div>
    )
  }
}

export default Settings;
