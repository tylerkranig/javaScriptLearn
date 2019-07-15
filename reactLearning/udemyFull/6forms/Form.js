class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            quantity: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addItem(this.state);
        this.setState({name:"",quantity:""});
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='name'>Name: </label>
                <input 
                    id='name'
                    name="name" 
                    value={this.state.name} 
                    onChange={this.handleChange}
                />
                <label htmlFor='quantity'>Quantity: </label>
                <input 
                    type='quantity' 
                    name="quantity"
                    placeholder='quantity' 
                    value={this.state.quantity}
                    onChange={this.handleChange} />
                <button>Add</button>
            </form>
        );
    }
}