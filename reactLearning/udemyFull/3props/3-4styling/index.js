class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Slots</h1>
                <Slot s1="x" s2="y" s3="z"/>
                <Slot s1="y" s2="y" s3="z"/>
                <Slot s1="z" s2="z" s3="z"/>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));