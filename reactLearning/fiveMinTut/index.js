import React from 'react';

class Hello extends React.Component {
    constructor() {
        super(); // super must be called so 'this' is initialized 
        this.state = {
            message : "my friend (from state)!"
        };
        this.updateMessage = this.updateMessage.bind(this);
    }

    render() {
        return (
            <div>
                <h1>Hello {this.state.message}</h1>
                <input type="text" placeholder="Insert Message" id="iMessage"></input>
                <button onClick={this.updateMessage} id='btn'>Click</button>
            </div>
        )
    }

    updateMessage() {
        let input = document.getElementById('iMessage');
        this.setState({
            message: input.value
        });
        input.value = '';
    }
}

let input = document.getElementById('iMessage');
input.addEventListener("keyup", function(e) {
    if(e.keyCode === 13) {
        e.preventDefault();
        document.getElementById('btn').click();
    }
});
// ReactDOM.render(<Hello message="my friend"/>, document.getElementById("root"));
// ReactDOM.render(<Hello message="my friend 2"/>, document.getElementById("root"));
export default Hello;