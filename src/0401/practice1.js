import React, { Component } from "react";

// Class Component
class WelcomeComponent extends Component {
  render() {
    return <div>歡迎 {this.props.name} 回來~~</div>;
  }
}

// Function Component
function WelcomeFunc(props) {
  return <div>歡迎 {props.name} 回來~~</div>;
}

class App extends Component {
  render() {
    return (
      <div>
        <WelcomeComponent name="huiyou" />
        <WelcomeFunc name="huiyou" />
      </div>
    );
  }
}

export default App;
