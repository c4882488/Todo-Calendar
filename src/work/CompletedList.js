import React from "react";
import CompletedItem from "./CompletedItem";

export default function UnCompletedList(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.todos.map((todo) => (
        <CompletedItem key={todo.id} todo={todo} onClick={props.onClick} />
      ))}
    </div>
  );
}
