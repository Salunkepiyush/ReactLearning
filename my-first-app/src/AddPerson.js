import React, { Component } from "react";

export default class AddPerson extends Component {
  state = { name: null, role: null };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  submit = (e) => {
    e.preventDefault();
    this.props.fetchPerson(this.state);
  };
  clear = (e) => {
    e.preventDefault();
    console.log("Cleaned", this.state);
    this.props.clearPerson();
  };

  render() {
    return (
      <div className="AddPerson">
        <form onSubmit={this.submit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleChange} />
          <br />
          <label htmlFor="name">Role:</label>
          <input type="text" id="role" onChange={this.handleChange} />
          <br />
          <button>Submit</button>
          <button onClick={this.clear}>Clear</button>
        </form>
      </div>
    );
  }
}
