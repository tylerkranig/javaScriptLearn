class App extends React.Component {
    render() {
        return (
            <div>
                <Hello to="Ringo" from="Paul"/>
                <Hello to="Tyler" from="Tyler"/>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));