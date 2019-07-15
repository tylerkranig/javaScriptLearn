class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        alert(`you typed ${this.state.fullName}`);
    }

    handleChange(e) {
        this.setState({
            fullName: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Fullname: </label>
                <input 
                    name="fullname" 
                    value={this.state.fullName} 
                    onChange={this.handleChange}
                />
                <button>Add</button>
            </form>
        );
    }
}