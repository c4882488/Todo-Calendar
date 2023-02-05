import React from "react";
import PropTypes from "prop-types";

function TodoItem(props) {
  return (
    <div>
      {/* <div >
        ID：{props.todos.id}
      </div> */}
      <div className={props.todos.completed ? "todo-tite-del" : "todo-tite"}>
        {props.todos.title}
      </div>
      <hr />
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
