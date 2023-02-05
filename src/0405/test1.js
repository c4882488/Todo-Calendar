import React from "react";

function LoginButton() {
  return <button>登入</button>;
}

function LogoutButton() {
  return <button>登出</button>;
}

function Greeting(props) {
  let message;
  let button;

  if (props.isLogin) {
    message = "Welcome back!";
    button = <LoginButton />;
  } else {
    message = "Please sign up.";
    button = <LogoutButton />;
  }

  return (
    <div>
      <h1>{message}</h1>
      {button}
    </div>
  );
}

function App() {
  return <Greeting isLogin={true} />;
}

export default App;
