class Hello extends React.Component {
    render() {
        let bangs = '!'.repeat(this.props.bangs)
        console.log(this.props); 
        return (
            <div> 
                Hello {this.props.to}! From: {this.props.from}{bangs}
            </div>
        );
    }
} 