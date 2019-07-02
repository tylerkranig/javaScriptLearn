import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  render() {
    const { face } = this.props;
    return (
      <div>
        <i
          className={`Die fas fa-dice-${face} ${
            this.props.rolling ? "rolling" : ""
          }`}
        />
      </div>
    );
  }
}

export default Die;
