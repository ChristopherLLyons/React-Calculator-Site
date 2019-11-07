import React, { Component } from "react";
import "./calculator.css";
import Screen from "../Screen/Screen.js";
//main calculator component
class Calculator extends Component {
  render() {
    return (
      <div className="Calculator">
        <Screen />
      </div>
    );
  }
}

export default Calculator;