import React, { Component } from "react";
import "./Keypad.css";
import KeypadRow from "../KeypadRow/KeypadRow.js";
import Button from "../Button/Button";

//main Keypad component
class Keypad extends Component {
  render() {
    return (
      <div className="Keypad">
        {this.props.children}

        {/* Keypad Row 1 */}
        <KeypadRow>
          <Button>C</Button>
          <Button>&larr;</Button>
          <Button>%</Button>
          <Button>/</Button>
        </KeypadRow>
        {/* Keypad Row 2 */}
        <KeypadRow>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>*</Button>
        </KeypadRow>
        {/* Keypad Row 3 */}
        <KeypadRow>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>+</Button>
        </KeypadRow>
        {/* Keypad Row 4 */}
        <KeypadRow>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>-</Button>
        </KeypadRow>
        {/* Keypad Row 5 */}
        <KeypadRow>
          <Button>0</Button>
          <Button></Button>
          <Button></Button>
          <Button></Button>
        </KeypadRow>
      </div>
    );
  }
}

export default Keypad;
