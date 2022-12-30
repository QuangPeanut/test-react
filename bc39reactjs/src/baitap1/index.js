import React, { Component } from "react";
import Header from "./header";
import Content from "./content";
import Sildebar from "./sildebar";
import Footer from "./footer";

class Baitap1 extends Component {
  render() {
    return  (
      <>
        <Header/>
        <div style={{display:"flex"}}>
        <Content/>
        <Sildebar/>
        </div>
        <Footer/>
      </>
    )
  }
}
export default Baitap1;