import "./App.css";
// import Baitap1 from './baitap1';
// import Baitap2 from './baitap2';
import RenderingElements from "./rendering-elements";
import HandlingEvents from "./handling-events";
import State from "./state";
import RenderColorCar from "./renderColorCar";
import ListKeys from "./list-keys";
import Communicate from "./communicate";
import Shoes from "./shoes";
import Home from "./user-managerment";
import CartDemo from "./CartDemo/CartDemo";

function App() {
  return (
    <div>
      <RenderingElements />
      <hr />
      <HandlingEvents />
      <hr />
      <State />
      <hr />
      <RenderColorCar />
      <hr />
      <ListKeys />
      <hr />
      <br />
      <br />
      <br />
      <br />
      <Communicate />
      <hr />
      <br />
      <br />
      <br />
      <br />
      <Shoes />
      <hr />
      <br />
      <br />
      <br />
      <br />

      <Home />
      <hr />
      <br />
      <br />
      <br />
      <br />
      <CartDemo />
    </div>
  );
}

export default App;
