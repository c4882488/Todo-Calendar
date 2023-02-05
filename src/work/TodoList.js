import React, { Component } from "react";
import CompletedList from "./CompletedList";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, title: "delectus aut autem", completed: true },
        {
          id: 2,
          title: "quis ut nam facilis et officia qui",
          completed: false,
        },
        { id: 3, title: "fugiat veniam minus", completed: false },
        { id: 4, title: "et porro tempora", completed: true },
        {
          id: 5,
          title: "laboriosam mollitia et enim quasi adipisci",
          completed: false,
        },
      ],
    };
  }

  handleClick = (id, e) => {
    e.preventDefault();
    const newTodos = this.state.todos.map((todo) => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });

    this.setState({
      todos: newTodos,
    });
  };

  render() {
    const unCompletedTodos = this.state.todos.filter(
      (todo) => todo.completed === false
    );
    const completedTodos = this.state.todos.filter(
      (todo) => todo.completed === true
    );
    return (
      <BrowserRouter>
        <div>
          <div>
            <Link to="/completed" style={{ marginRight: "10px" }}>
              已完成
            </Link>
            <Link to="/un-complted">未完成</Link>
          </div>
          <Switch>
            <Route path="/completed">
              <CompletedList
                todos={unCompletedTodos}
                onClick={this.handleClick}
                title="未完成"
              />
            </Route>
            <Route path="/un-complted">
              <CompletedList
                todos={completedTodos}
                onClick={this.handleClick}
                title="以完成"
              />
            </Route>
            <Route path="/">
              <CompletedList
                todos={unCompletedTodos}
                onClick={this.handleClick}
                title="未完成"
              />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
