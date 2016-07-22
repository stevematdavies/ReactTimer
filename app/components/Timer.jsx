const React = require ('react');
const Clock = require('Clock');


module.exports = React.createClass ({

    getInitialState() {
        return {count: 0,timerStatus: 'stopped'}
    },

    handleStatusChange(_status){
      return ()=> {
          this.setState({timerStatus: _status});
      }
    },

    clearTimer(){
        this.setState({count: 0, timerStatus: 'stopped'})
        clearInterval(this.timer);
        this.timer = undefined;
    },

    componentDidUpdate(_,prevState){
        if (this.state.timerStatus !== prevState.timerStatus) {
           (this.state.timerStatus === 'started')? this.startTimer() : this.stopTimer();
        }
    },

    startTimer(){
        this.timer = setInterval(()=>{
            let inc = this.state.count + 1;
            this.setState({count: inc});
        },1000)
    },

    stopTimer(){
        clearInterval(this.timer);
        this.setState({timerStatus: 'stopped'});
    },

    render() {

        let { count } = this.state;

        let renderButtons = () => {
            if (this.state.timerStatus === 'stopped') {
                return <button className="button success" onClick={this.handleStatusChange('started')}>Start</button>;
            } else {
                return  <button className="button alert" onClick={this.handleStatusChange('stopped')}>Stop</button>
            }
        };

        return (
            <div>
                <h1 className="page-title">Timer App</h1>
                <Clock totalSeconds={count}/>
                <div className="controls">
                    {renderButtons()}
                    <button className="button secondary hollow" onClick={this.clearTimer}>Clear</button>
                </div>
            </div>
        );
    }
});