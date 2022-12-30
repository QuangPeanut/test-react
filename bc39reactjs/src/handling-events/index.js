import React, { Component } from "react";
import Example from "./example";

export default class HandlingEvents extends Component {
  evenClick() {
    console.log(123);
  }

  evenClickParams(user, age) {
    console.log(user, age);
  }

  render() {
    return (
      <>
        <h3> *HandlingEvents </h3>
        <button className="btn btn-danger" onClick={this.evenClick}>
          Click
        </button>
        <button
          className="btn btn-success"
          onClick={() => {
            this.evenClickParams("Quang", 23);
          }}
        >
          Click Params
        </button>

        <Example />
      </>
    );
  }
}
