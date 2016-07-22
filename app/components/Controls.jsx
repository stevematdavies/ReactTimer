const React = require('react');

module.exports = React.createClass({

    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired
    },


    onStatusChange(newStatus) {
        return () => this.props.onStatusChange(newStatus);
    },

    render(){


        let { countdownStatus } = this.props;

        let renderStopStartButton = () => {
            if (countdownStatus === 'started') {
                return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>;
            } else if (countdownStatus === 'paused') {
                return <button className="button primary"   onClick={this.onStatusChange('started')}>Start</button>;
            }
        };

        return (
            <div className="controls">
                {renderStopStartButton()}
                <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
            </div>
        );
    }

});