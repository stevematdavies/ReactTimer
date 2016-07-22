const React = require('react');
const Clock = require('Clock');
const CountdownForm = require('CountdownForm');
const Controls = require('Controls');
const Countdown = require('Countdown');


module.exports = React.createClass ( {

    getInitialState() {
        return {count: 0, countdownStatus: 'stopped'}
    },

    componentWillReceiveProps(){},

    componentDidUpdate(preProps, preState) {

        if (this.state.countdownStatus !== preState.countdownStatus) {

            switch(this.state.countdownStatus) {
                case 'started'  :
                    this.startTimer();
                    break;
                case 'stopped'  :
                    this.setState({count: 0});
                case 'paused'   :
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },

    // Fired when removed from DOM
    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = undefined;
    },

    startTimer() {

        this.timer = setInterval( ()=> {
            let newCount = this.state.count - 1;
            this.setState({count: newCount >= 0 ? newCount : 0});
            if(newCount == 0) this.setState({countdownStatus: 'stopped'});
        }, 1000 );
    },

    handleSetCountdown(seconds) {
        this.setState({count: seconds, countdownStatus: 'started'});
    },

    handleStatusChange(newStatus) {
        this.setState({countdownStatus: newStatus});
    },

    render() {

        let { count, countdownStatus } = this.state;

        let renderControlArea = () => {
            if (countdownStatus !== 'stopped') {
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>;
            } else {
                return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
            }
        };

        return (
            <div>
                <h1 className="page-title">Countdown App</h1>
                <Clock totalSeconds={count}/>
                {renderControlArea()}
            </div>
        );
    },


});