import React, { Component } from 'react';

class AboutMe extends Component {

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
        <h1>About Kejun Xin</h1>
        <p>
          Email: <a href="mailto:xinkejun@hotmail.com">xinkejun@hotmail.com</a> <br />
          Linkedin: <a href="https://www.linkedin.com/in/kejun-xin-b32a0216">https://www.linkedin.com/in/kejun-xin-b32a0216</a><br />
          Aboutme: <a href="https://about.me/xinkejun">https://about.me/xinkejun</a>
        </p>
      </div>
    )
  }
}

export default AboutMe;
