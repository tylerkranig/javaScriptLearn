function getNum(){
    return Math.floor(Math.random() *10) + 1;
}

class NumPicker extends React.Component {
    render() {
        const num = getNum();
        return (
            <div>
                <h1>Your number is ... { num }</h1>
                <p>{num === 7 ? 'congrats!' : 'booo'}</p> 
                {num === 7 &&
                    <img src="https://media.tenor.com/images/e5817f80eec37fb203f8d5da4f899c9e/tenor.gif" />
                    }
            </div>   
        )
    }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));