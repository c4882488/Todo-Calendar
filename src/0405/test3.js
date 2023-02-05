import React from "react";

function LoginButton() {
  return <button>登入</button>;
}

function LogoutButton() {
  return <button>登出</button>;
}

function Greeting(props) {
  const { isLogin } = props;

  return (
    <div>
      <h1>{isLogin ? "Welcome back!" : "Please sign up."}</h1>
      {isLogin ? <LoginButton /> : <LogoutButton />}
    </div>
  );
}

function App() {
  return <Greeting isLogin={true} />;
}

export default App;
