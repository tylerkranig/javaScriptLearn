import React, { Component } from "react";
import Star from "./Star";

class Rating extends Component {
  static defaultProps = { max: 5 };
  
  constructor(props) {
    super(props); // have to call the super function to setup object
    this.state = { // setup a start state for the component
      dynamicValue: props.stars,
      value: 0
    };
    this._colors = { // base colors for the stars to fill with
      1: "#f44336",
      2: "#FF5722",
      3: "#FF9800",
      4: "#FFC107",
      5: "#FFEB3B"
    };
    this._meanings = { // the text for each rating score
      0: "No Rating 🚫",
      1: "Terrible 🤮",
      2: "Mediocre 😒",
      3: "Average 😐",
      4: "Solid 🙂",
      5: "Fantastic 🔥"
    };
    // bind this value to functions
    this.handleClick = this.handleClick.bind(this); 
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  // because 'this' was bound we can use 'this' in handleClick
  handleClick(newValue) {
    this.setState({
      value: newValue,
      dynamicValue: newValue
    });

  }
  handleMouseEnter(newValue) {
    this.setState({ dynamicValue: newValue });
  }

  handleMouseLeave(newValue) {
    this.setState({ dynamicValue: this.state.value });
  }

  // the render method for the ratings on the actual page itself
  render() {
    const { dynamicValue, value } = this.state; // grab values from the current state
    const starSpans = []; // rebuilding the array that holds each star
    const max = this.props.max;
    let count = 0;
    for (let v = 1; v <= max; v++) {
      if (v <= dynamicValue) {
        count++;
      }
    }
    for (let v = 1; v <= max; v++) {
      starSpans.push(
        <Star
          key={v}
          color={this._colors[count]}
          isFilled={v <= dynamicValue}
          value={v}
          handleHover={this.handleMouseEnter}
          handleHoverLeave={this.handleMouseLeave}
          handleClick={this.handleClick}
        />
      );
    }
    return (
      <div>
        <p>{this._meanings[value]}</p>
        {starSpans}
      </div>
    );
  }
}
export default Rating;
