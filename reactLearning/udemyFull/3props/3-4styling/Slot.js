class Slot extends React.Component {
    render() {
        const {s1,s2,s3} = this.props;
        return (
            <div className={s1 === s2 && s2 === s3 ? 'Winner' : 'lose'}>
                {this.props.s1} {this.props.s2} {this.props.s3}
                <p style={{ fontSize: '10px' }}>
                    {s1 === s2 && s2 === s3 ? 'You Win!' : 'You Lost'}
                </p>
            </div>
        )
    }
} 