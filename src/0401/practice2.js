import React, { Component } from "react";
import "./Practice2.css";

function UserInfo(props) {
  return (
    <div className="card">
      <img
        className="avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
      <div className="container">
        <div className="user-name">{props.user.name}</div>
        <div className="user-phone">{props.user.phone}</div>
        <div className="user-email">{props.user.email}</div>
      </div>
    </div>
  );
}

const user = {
  name: "Steven",
  phone: "0912345678",
  email: "steven@gmail.com",
  avatarUrl:
    "https://images.unsplash.com/photo-1547624643-3bf761b09502?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
};

class App extends Component {
  render() {
    return (
      <div>
        <UserInfo user={user} />
      </div>
    );
  }
}

export default App;
