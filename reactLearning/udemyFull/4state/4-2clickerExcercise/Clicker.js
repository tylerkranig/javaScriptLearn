class Clicker extends React.Component {
    constructor(props){
        super(props); // always needs to be at the top of the constructor
        this.state = {
            score: 5,
            gameOver: false
        }
    }

    buttonClick = (e) => {
        let rand = Math.floor(Math.random() *10) + 1;
        this.setState({score: rand})
    }

    render() {
        const { score } = this.state;
        return (
            <div>
                <h1>Your number is {score}</h1>
                {score === 7 ? 
                    <h2>you win</h2> :
                    <button className="button-secondary" onClick={this.buttonClick}>Random</button>                
                }
            </div>
        )
    }
}