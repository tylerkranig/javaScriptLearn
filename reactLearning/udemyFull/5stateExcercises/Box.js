function choice(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

class Box extends React.Component {
  static defaultProps = {
    allColors: ["purple", "magenta", "blue", "green"]
  };

  constructor(props) {
    super(props);
    this.state = {
      color: choice(this.props.allColors)
    };
  }

  pickColor() {
    let newColor;

    do {
      newColor = choice(this.props.allColors);
    } while (newColor === this.state.color);

    this.setState({ color: newColor });
  }

  handleClick = () => {
    this.pickColor();
  };

  render() {
    return (
      <div
        className="Box"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      />
    );
  }
}
