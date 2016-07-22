const React = require ('react');
const Clock = require('Clock');
const Controls = require('Controls');


module.exports = React.createClass({


    getInitialState() {
        return {count: 0, countdownStatus: 'stopped'}
    },


    onStatusChange() {

    },

    render(){

        let renderStopStartButton = () => {
            if (countdownStatus === 'started') {
                return <button className="button secondary" onClick={this.onStatusChange('stopped')}>Stop</button>;
            } else if (countdownStatus === 'stopped') {
                return <button className="button primary"   onClick={this.onStatusChange('started')}>Start</button>;
            }
        };

        let { countdownStatus } = this.state;

        return (
            <div>
                <h1 className="page-title">Timer App</h1>
                <Clock />
                {renderStopStartButton()}
            </div>
        );
    }

});