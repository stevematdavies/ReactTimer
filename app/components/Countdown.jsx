const React = require('react');
const Clock = require('Clock');
const CountdownForm = require('CountdownForm');


module.exports = React.createClass ( {

    getInitialState() {
        return {
            count: 0,
            countdownStatus: 'stopped'
        }
    },

    componentDidUpdate(preProps, preState) {
        if (this.state.coundownStatus !== preState.countdownStatus) {
            switch(this.state.countdownStatus) {
                case 'started' : this.startTimer();
                    break;
            }
        }
    },

    startTimer() {
        this.timer = setInterval( ()=> {
            let newCount = this.state.count - 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });
        }, 1000 );
    },

    handleSetCountdown(seconds) {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
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