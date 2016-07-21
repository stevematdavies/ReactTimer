const React = require('react');
const Clock = require('Clock');
const CountdownForm = require('CountdownForm');


module.exports = React.createClass ( {

    getInitialState() {
        return {
            count: 0
        }
    },

    handleSetCountdown(seconds) {
        this.setState({
            count: seconds
        });
    },

    render() {

        let { count } = this.state;

        return (
            <div>
                <Clock totalSeconds={count}/>
                <CountdownForm onSetCountdown={this.handleSetCountdown}/>
            </div>
        );
    },


});