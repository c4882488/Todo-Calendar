import React from "react";
import PropTypes from "prop-types";

function TodoItem(props) {
  return (
    <div className="box">
      <div className="a">
        <a
          href="#"
          onClick={() => {
            console.log(props.onClick);
            props.onClick(props.todos.completed, props.todos.id);
          }}
        >
          {props.todos.completed ? "未完成" : "完成"}
        </a>
      </div>
      <div className={props.todos.completed ? "todo-tite-del" : "todo-tite"}>
        {props.todos.title}
      </div>
    </div>
  );
}

TodoItem.prototype = {
  todos: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }),
};

export default TodoItem;
