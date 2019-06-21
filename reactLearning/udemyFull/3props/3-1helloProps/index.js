class App extends React.Component {
    render() {
        return (
            <div>
                <Hello 
                    to=" " 
                    from="  " 
                    bangs={4}
                    data={[1,2,3,4,5]}
                    isFlag
                />
                <Hello 
                    to=" " 
                    from="  " 
                    bangs={10}
                    data={[1,2,3,4,5]}
                    isFlag
                />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));