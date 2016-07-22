const React = require('react');

module.exports = React.createClass({

    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired
    },


    render(){

        let { countdownStatus } = this.props;

        let renderStopStartButton = () => {
            if (countdownStatus === 'started') {
                return <button className="button secondary">Pause</button>;
            } else if (countdownStatus === 'paused') {
                return <button className="button primary">Start</button>;
            }
        };

        return (
            <div className="controls">
                {renderStopStartButton()}
                <button className="button alert hollow">Clear</button>
            </div>
        );
    }

});