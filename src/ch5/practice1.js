import React from "react";

function LoginButton() {
  return <button>登入</button>;
}

function LogoutButton() {
  return <button>登出</button>;
}

function Welcome(props) {
  if (props.isLogin) {
    return (
      <div>
        <div>Welcome back!</div>
        <LogoutButton />
      </div>
    );
  }

  return (
    <div>
      <div>Please sign up.</div>
      <LoginButton />
    </div>
  );
}

export default function App() {
  return <Welcome isLogin={true} />;
}
