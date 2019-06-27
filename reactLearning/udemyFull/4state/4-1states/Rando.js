

class Rando extends React.Component {
    constructor(props) {
        super(props);
        this.state = {num:0};
        this.makeTimer();
    }
    makeTimer(){
        setInterval(() => {
            let rand = Math.floor(Math.random() *10) + 1;
            this.setState({num: rand});
        },1000);
    }
    click = (e) => { // automatically binds "this" for you, Babel compiles this to actual js code
        this.setState({num: 1});
    };
    render() {
        // this.makeTimer();
        return (
            <div>
                <h1>{this.state.num}</h1>
                <button className="button" onClick={this.click}></button>
            </div>
        )
    }
}