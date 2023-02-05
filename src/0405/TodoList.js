import React, { Component } from "react";
import "./Practice4.css";
import TodoItem from "./TodoItem";

class App extends Component {
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
        <h2>代辦清單</h2>
        {this.todos.map((todo) => (
          <TodoItem key={todo.id} todos={todo} />
        ))}
      </div>
    );
  }
}

export default App;
