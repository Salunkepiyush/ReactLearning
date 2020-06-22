import React, { Component } from "react";
import FirstComponent from "./firstcomponent";
import AddPerson from "./AddPerson";

export default class App extends Component {
  state = {
    persons: [],
  };

  fetchPerson = (value) => {
    let persons = [...this.state.persons, value];
    this.setState({
      persons: persons,
    });
  };

  clearPerson = () => {
    this.setState({
      persons: [],
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-link">Learn React</h1>
          <hr style={{ border: "2px solid blue" }} />
          <AddPerson
            fetchPerson={this.fetchPerson}
            clearPerson={this.clearPerson}
          />
          <FirstComponent persons={this.state.persons} />
        </header>
      </div>
    );
  }
}
