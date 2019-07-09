class IconList extends React.Component {
  static defaultProps = {
    options: [
      { id: 1, name: "angry" },
      { id: 2, name: "archive" },
      { id: 3, name: "at" },
      { id: 4, name: "archway" },
      { id: 5, name: "baby" },
      { id: 6, name: "bell" },
      { id: 7, name: "bolt" },
      { id: 8, name: "bone" },
      { id: 9, name: "car" },
      { id: 10, name: "city" },
      { id: 11, name: "cloud" },
      { id: 12, name: "couch" }
    ]
  };

  constructor(props) {
    super(props);
    this.state = {
      icons: []
    };
  }

  addIcon = () => {
    let idx = Math.floor(Math.random() * this.props.options.length);
    let newIcon = this.props.options[idx];
    //Wrong way, we need to make the objects inside state immutable
    //   let temp = this.state.icons;
    //   temp.push(newIcon);
    //   this.setState({ icons: temp })

    this.setState({ icons: [...this.state.icons, newIcon] });
  };

  render() {
    const icons = this.state.icons.map(i => <i className={`fas fa-${i}`} />);
    return (
      <div>
        <h1>Icons: {icons}</h1>
        <button onClick={this.addIcon}>Add New Icon</button>
      </div>
    );
  }
}
