import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
function Todos(props) {
  return (
    <div>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          markComplete={props.markComplete}
          delTodo={props.delTodo}
        />
      ))}
    </div>
  );
}

// proptype
Todos.prototype = {
  todos: PropTypes.array.isRequired,
};
export default Todos;
