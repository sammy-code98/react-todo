import React, { Component } from 'react'
import PropTypes from 'prop-types'


class TodoItem extends Component {
    getStlye = () => {
        return {
            
            background: '#f4f4f4',
            padding: '20px',
            margin:'20px',
            borderRadius:'20px',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    markComplete(e) {
        console.log(this.props);
    }
    render() {
        const { title, id } = this.props.todo
        return (
            <div style={this.getStlye()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                    {' '}
                    {title}
                    {' '}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}


// proptype
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}


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


export default TodoItem
