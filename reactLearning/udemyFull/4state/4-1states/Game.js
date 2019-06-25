class Game extends React.Component {
    constructor(props){
        super(props); // always needs to be at the top of the constructor
        this.state = {
            score: 25,
            gameOver: false
        }
    }

    render() {
        const { name, hobbies } = this.props;
        return (
            <div>
                <h1>Your score is {this.state.score}</h1>
            </div>
        )
    }
}