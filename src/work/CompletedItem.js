import React from "react";

export default function UnCompletedItem(props) {
  return (
    <div>
      <span>{props.todo.title}</span>
      &nbsp;&nbsp;
      <a href="#" onClick={(e) => props.onClick(props.todo.id, e)}>
        {props.todo.completed ? "未完成" : "已完成"}
      </a>
    </div>
  );
}
