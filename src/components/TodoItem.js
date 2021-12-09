import React from "react";
import PropTypes from "prop-types";
const btnStyle = {
    background: '#ff0000',
    border: 'none',
    borderRadius: '50%',
    color: '#fff',
    padding: '5px 9px',
    cursor: 'pointer',
    float: 'right',
    outline: 'none'
}
function TodoItem(props) {
  const getStlye = () => {
    return {
      background: "#f4f4f4",
      padding: "20px",
      margin: "20px",
      borderRadius: "20px",
      textDecoration: props.todo.completed ? "line-through" : "none",
    };
  };
 const markComplete = (e) => {
      console.log(props);
  }
  const {title, id } = props.todo

  return <div style={getStlye()}>
      <p>
      <input type="checkbox" onChange={props.markComplete.id}/>
      {' '}
      {title}
      <button onClick={props.delTodo.id} style={btnStyle}>x</button>
      </p>
     
  </div>;
}

// proptypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem;
