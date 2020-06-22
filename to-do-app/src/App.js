import React, { Component } from "react";
import Todos from "./to-do";
import AddTodo from "./AddTodo";

class App extends Component {
  state = {
    todos: [],
  };

  addTask = (task) => {
    console.log(task);
    let todos = [...this.state.todos, task];
    this.setState({ todos });
  };

  removeTask = (id) => {
    let todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    console.log("What is this", todos);
    if (todos.length > 0) {
      this.setState({
        todos,
      });
    } else {
      let todos = [];
      this.setState({ todos });
    }
  };

  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text ">To-Do List</h1>
        <Todos todos={this.state.todos} removeTask={this.removeTask} />
        <AddTodo addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
