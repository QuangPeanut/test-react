import React, { Component } from "react";

export default class Child extends Component {
  handleRestUserName = () => {
    this.props.resetUserName("Cybersoft");
  };

  render() {
    // props: truyen du lieu tu cha sang con
    console.log(this.props);
    const { username, age } = this.props;
    return (
      <div>
        <h3>*Child</h3>
        <p>
          Username: {username} Age:{age}
        </p>
        <button className="btn btn-danger" onClick={this.handleRestUserName}>
          Reset Username
        </button>
      </div>
    );
  }
}
