import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from './components/Todos'
import './App.css'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import { v4 as uuid } from "uuid"
import About from './components/pages/About'

class App extends Component {

  state = {

    todos: [

      {
        id: uuid(),
        title: 'code for 2 hours',
        completed: false
      },
      {
        id: uuid(),
        title: 'code for 2 hours',
        completed: true
      },
      {
        id: uuid(),
        title: 'code for 2 hours',
        completed: false
      }
    ]
  }
  markComplete = (id) => {
    // console.log(id);
    this.setState({
      todos: this.state.todos.map(todo => {
        // check if the todo.id is equal with the id passed to the markcomplete fxn
        if (todo.id === id) {
          todo.completed = !todo.completed

        }
        return todo;
      })
    })
  }
  delTodo = (id) => {
    // console.log(id);

    // filter the id of the todo item that doesnt match the id passed
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  addTodo = (title) => {
    // console.log(title);
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }
  render() {

    return (
      <Router>
        <div className="App">

          <Header />
          <br />
          {/* the exact keyword makes the route exactly the / */}
          <Route exact path="/" render={props => (
            <React.Fragment>
              <div className="contianer">
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
              </div>
            </React.Fragment>
          )} />

          <Route path="/about" component={About} />







        </div>
      </Router>

    )
  }
}

export default App

