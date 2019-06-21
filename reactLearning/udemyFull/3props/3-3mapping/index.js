class App extends React.Component {
    render() {
        return (
            <div>
                <Friend 
                    name="test"
                    hobbies={[1,2,3,4,5]}
                />
                 <Friend 
                    name="test"
                    hobbies={[1,2,3,4,5].reverse()}
                />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));