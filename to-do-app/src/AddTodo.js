import React, { Component } from "react";

class AddTodo extends Component {
  state = { id: "", task: "" };

  handleChange = (e) => {
    this.setState({
      id: Math.random(),
      task: e.target.value,
    });
  };

  addTask = (e) => {
    e.preventDefault();
    this.props.addTask(this.state);
    this.setState({ task: "" });
  };

  render() {
    return (
      <div className="Add">
        <form onSubmit={this.addTask}>
          <input
            type="text"
            id="name"
            onChange={this.handleChange}
            value={this.state.task}
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
