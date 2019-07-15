class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { name: "Milk", quantity: "2 gallons"},                
                { name: "bread", quantity: "2 loaves"}
            ]
        }
        this.addItem = this.addItem.bind(this);
    }

    addItem(item) {
        this.setState(st => ({
            items: [...st.items, item]
        }));
    }

    renderItems() {
        return (
            <ul>
                {this.state.items.map(item => (
                    <li>
                        {item.name}:{item.quantity}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div>
                <h1>List</h1>
                {this.renderItems()}
                <Form addItem={this.addItem} />
            </div>
        )
    }
}