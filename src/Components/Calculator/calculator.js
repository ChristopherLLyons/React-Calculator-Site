import React, { Component } from "react";
import "../Calculator/calculator.css";
import Screen from "../Screen/Screen.js";
import Keypad from "../Keypad/Keypad.js";
//main calculator component
class Calculator extends Component {
  render() {
    return (
      <div className="Calculator">
        <Screen />
        <Keypad />
      </div>
    );
  }
}

export default Calculator;
