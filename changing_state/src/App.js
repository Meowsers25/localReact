import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    // Here is where we bind setState:
    this.handleClick = this.handleClick.bind(this);
    this.minusClick = this.minusClick.bind(this);
  }
  // Strong convention to use handleClick for click events
  // <-- Have to use this. when method is part of the class --> See in button HTML
  // setState is a baked in goodie of React.Component
  // We use when we want to change state
  // Made function prevState to remember our previous state
  // We need to bind setState in our class. See above

  handleClick() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  minusClick() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change!</button>
        <button onClick={this.minusClick}>Minus!</button>
      </div>
    );
  }
}

export default App;
