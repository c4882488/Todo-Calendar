import React, { Component } from "react";

function Button(props) {
  const label = props.label;
  const color = props.danger ? "#FF0000" : null;

  return <button style={{ color: color }}>{label}</button>;
}

class App extends Component {
  render() {
    return (
      <div>
        <Button label="刪除" danger={true} />
        <Button label="存檔" />
      </div>
    );
  }
}

export default App;
