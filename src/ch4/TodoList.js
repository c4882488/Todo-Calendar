import React, { Component } from "react";

export default class TodoList extends Component {
  // 宣告 Todo 資料
  todos = [
    { id: 1, title: "delectus aut autem", completed: false },
    { id: 2, title: "quis ut nam facilis et officia qui", completed: false },
    { id: 3, title: "fugiat veniam minus", completed: false },
    { id: 4, title: "et porro tempora", completed: true },
    {
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
  ];

  render() {
    return (
      <div>
        <h1>待辦清單</h1>
        <div>
          <div>ID：{this.todos[0].id}</div>
          <div>Title：{this.todos[0].title}</div>
          <hr />
          <div>ID：{this.todos[1].id}</div>
          <div>Title：{this.todos[1].title}</div>
          <hr />
          <div>ID：{this.todos[2].id}</div>
          <div>Title：{this.todos[2].title}</div>
          <hr />
          <div>ID：{this.todos[3].id}</div>
          <div>Title：{this.todos[3].title}</div>
          <hr />
          <div>ID：{this.todos[4].id}</div>
          <div>Title：{this.todos[4].title}</div>
          <hr />
        </div>
      </div>
    );
  }
}
