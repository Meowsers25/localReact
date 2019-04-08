import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    // console.log("Clicked");
    this.setState(prevState => {
      return {
        loggedIn: !prevState.loggedIn
      };
    });
  };

  render() {
    let btnTxt = this.state.loggedIn ? "Log Out" : "Log In";
    return (
      <div>
        {this.state.loggedIn ? <h3>Logged In</h3> : <h3>Logged Out</h3>}
        <button onClick={this.handleClick}>{btnTxt}</button>
      </div>
    );
  }
}

export default App;
