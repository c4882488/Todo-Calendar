import React, { Component } from "react";
import "./Practice4.css";
import TodoItem from "./TodoItem";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, title: "delectus aut autem", completed: false },
        {
          id: 2,
          title: "quis ut nam facilis et officia qui",
          completed: false,
        },
        { id: 3, title: "fugiat veniam minus", completed: false },
        { id: 4, title: "et porro tempora", completed: true },
        {
          id: 5,
          title:
            "laboriosam mollitia et enim quasi adipisci quia provident illum",
          completed: false,
        },
      ],
    };
  }
  handleClick = (status, id) => {
    console.log(status, id);
    this.setState((prevState) => {
      const newTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return { todos: newTodos };
    });
  };

  render() {
    const { todos } = this.state;
    const unCompletedTodos = todos.filter((todo) => !todo.completed);
    const completedTodos = todos.filter((todo) => todo.completed);
    return (
      <div>
        <h2>代辦清單</h2>
        {/* {todos.map((todo) => (
          <TodoItem key={todo.id} todos={todo} />
        ))} */}
        {unCompletedTodos.map((todo) => (
          <TodoItem key={todo.id} todos={todo} onClick={this.handleClick} />
        ))}
        {completedTodos.map((todo) => (
          <TodoItem key={todo.id} todos={todo} onClick={this.handleClick} />
        ))}
      </div>
    );
  }
}

export default App;
