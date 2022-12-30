import React, { Component } from "react";

export default class ListKeys extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listUser: [
        {
          id: 1,
          username: "Quang",
          age: 18,
        },
        {
          id: 2,
          username: "Phát",
          age: 19,
        },
        {
          id: 3,
          username: "Vân",
          age: 20,
        },
        {
          id: 4,
          username: "Lâm",
          age: 21,
        },
      ],

      listCar: [
        {
          id: 1,
          nameCar: "Black Car",
          img: "./images./imgBlackCar.jpg",
        },
        {
          id: 2,
          nameCar: "Silver Car",
          img: "./images./imgSilverCar.jpg",
        },
        {
          id: 3,
          nameCar: "Red Car",
          img: "./images./imgRedCar.jpg",
        },
      ],
    };
  }

  renderListUser = (user) => {
    return this.state.listUser.map((user) => {
      return (
        <li key={user.id}>
          UserName: {user.username} - Age: {user.age}
        </li>
      );
    });
  };

  renderListCar = () => {
    const { listCar } = this.state;
    listCar.map((car) => {
      return (
        <tr key={car.id}>
          <td>{car.id}</td>
          <td>{car.nameCar}</td>
          <td>
            <img src={car.img} width="100" alt="" />
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <h3>*ListKeys</h3>
        <ul>
          {/* {this.state.listUser.map((user, index) => {
            return (
              <li key={user.id}>
                Username: {user.username} - age: {user.age}
              </li>
            );
          })} */}
          {this.renderListUser()}
        </ul>

        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Img</th>
            </tr>
          </thead>
          <tbody>{this.renderListCar()}</tbody>
        </table>
      </div>
    );
  }
}
