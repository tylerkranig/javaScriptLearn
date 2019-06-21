class Friend extends React.Component {
    render() {
        const { name, hobbies } = this.props;
        return (
            <div>
            <p>I am {name}</p>
            <p>My hobbies:</p>
            <ul>
                {hobbies.map(h => <li>{h}</li>)}
            </ul></div>
        )
    }
}