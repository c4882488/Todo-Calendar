import React, { Component } from "react";

function Clock(props) {
  return (
    <div>
      <h1>目前時間：{props.date.toLocaleTimeString()}</h1>
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }
  render() {
    return (
      <div>
        <Clock date={this.state.date} />
      </div>
    );
  }
}

export default App;
