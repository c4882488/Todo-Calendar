import React from "react";
import PropTypes from "prop-types";

function TodoItem(props) {
  const completedStyle = {
    textDecorationLine: "line-through",
  };
  return (
    <div>
      {props.todo.completed ? (
        <div style={completedStyle}>{props.todo.title}</div>
      ) : (
        <div>{props.todo.title}</div>
      )}
      <hr />
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }),
};

export default TodoItem;
