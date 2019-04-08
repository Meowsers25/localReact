import React, { Component } from "react";
import Conditional from "./Conditional";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }
  // componentDidMount is simulating a page load
  // for this exercise
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 2500);
  }

  render() {
    return (
      <div>
        <h1>Navbar</h1>
        {this.state.isLoading ? <h1>Loading....</h1> : <Conditional />}
        <h1>Footer</h1>
      </div>
    );
  }
}

export default App;
