class Data extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            quote:'', // do not set state inside the constructor, always do it didMount
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    
    // could do this async, then have an await before axios.get then any code after will run after axios returns
    componentDidMount() {
        axios.get("https://api.github.com/zen").then(resp => {
            this.setState({ quote: resp.data });
        });
    }
    
    render() {
        return (
             <div>
                 <p>{this.state.quote}</p>
             </div>
        );
    }
}