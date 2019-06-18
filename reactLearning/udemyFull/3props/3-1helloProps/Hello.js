class Hello extends React.Component {
    render() {
        return (
            <div> 
                <h1>Hello {this.props.to}! From: {this.props.from}. </h1>
            </div>
        );
    }
} 