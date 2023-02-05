import React from "react";

function TodoItem(props) {
  return (
    <div>
      <div className="todo-item">ID：{props.todos.id}</div>
      <div className="todo-tite">Tite：{props.todos.title}</div>
      <hr />
    </div>
  );
}

export default TodoItem;
