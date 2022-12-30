import React, { Component } from "react";
import Child from "./child";
import ChildFnc from "./childFnc";
import Item from "./item";

export default class Communicate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "Quang",
      age: 18,
    };
  }

  handleChangeUserName = () => {
    this.setState({
      username: "Nguyen Ngoc Quang",
    });
  };

  handleReset = (username) => {
    this.setState({
      username,
    });
  };

  render() {
    const { username, age } = this.state;

    return (
      <div>
        <h3>*Communicate</h3>
        <p>
          Usernam: {username} - Age: {age}
        </p>
        <button className="btn btn-success" onClick={this.handleChangeUserName}>
          Change username
        </button>
        <hr width="50%" />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {" "}
              <Child
                username={username}
                age={age}
                resetUserName={this.handleReset}
              />
            </div>
            <div className="col-md-4">
              {" "}
              <ChildFnc username={username} />
            </div>
            <div className="col-md-4">
              <Item>
                <div>
                  <p>
                    Username: {username} - Age: {age}
                  </p>
                </div>
              </Item>
            </div>
          </div>
        </div>

        <hr />
      </div>
    );
  }
}
