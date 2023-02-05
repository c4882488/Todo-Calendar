import React from "react";

function MessageAlert(props) {
  const { errorMessage } = props;

  if (!errorMessage) {
    return null;
  }

  return <h1>錯誤發生，訊息如下「{errorMessage}」。</h1>;
}

function Dashboard(props) {
  return (
    <div>
      <h1>Dashboard</h1>
      {<MessageAlert errorMessage={props.errorMessage} />}
    </div>
  );
}

function App() {
  return <Dashboard errorMessage="hello" />;
}

export default App;
