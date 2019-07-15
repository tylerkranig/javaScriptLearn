class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            email: "",
            password: ""
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
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Fullname: </label>
                <input 
                    name="fullName" 
                    value={this.state.fullName} 
                    onChange={this.handleChange}
                />
                <input 
                    type='email' 
                    name="email"
                    placeholder='email' 
                    value={this.state.email}
                    onChange={this.handleChange} />
                <input 
                    type='password' 
                    name="password"
                    placeholder='password'
                    value={this.state.password} 
                    onChange={this.handleChange}/>
                <button>Add</button>
            </form>
        );
    }
}