const React = require('react');


module.exports = React.createClass({

    onSubmit(e) {
        e.preventDefault();

        let strSeconds = this.refs.seconds.value;

        if(strSeconds && strSeconds.match(/^[0-9]*$/)) {
            this.refs.seconds.value = '';
            this.props.onSetCountdown(parseInt(strSeconds,10));
        }
    },

    render() {
        return (
            <div>
                <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
                    <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
                    <button className="button expanded">Start</button>
                </form>
            </div>
        );
    }

});