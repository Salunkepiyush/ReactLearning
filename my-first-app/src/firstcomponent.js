import React, { Component } from "react";

export default class FirstComponent extends Component {
  state = {
    rank: Math.random(),
  };
  render() {
    let counter = 0;
    const { persons } = this.props;
    const personList = persons.map((person) => {
      counter++;
      return (
        <div className="first-component" key={counter}>
          <h1> Hi, iam from First Component name is {person.name}</h1>
          <p>We have rank as {this.state.rank} </p>
          <p> Role is {person.role}</p>
        </div>
      );
    });
    return <div className="Perons">{personList}</div>;
  }
}
