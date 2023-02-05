import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Practice2.css";

// index_practice2_after.js

function Avatar(props) {
  return <img className="avatar" src={props.avatarUrl} alt={props.name} />;
}

function UserInfoContent(props) {
  return (
    <div className="container">
      <div className="user-name">{props.user.name}</div>
      <div className="user-phone">{props.user.phone}</div>
      <div className="user-email">{props.user.email}</div>
    </div>
  );
}

function UserInfo(props) {
  return (
    <div className="card">
      <Avatar avatarUrl={props.user.avatarUrl} name={props.user.name} />
      <UserInfoContent user={props.user} />
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

ReactDOM.render(<UserInfo user={user} />, document.getElementById("root"));
