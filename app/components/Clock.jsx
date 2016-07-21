const React = require ( 'react' );

module.exports = React.createClass ({

    formatSeconds(totalSeconds) {

        let seconds = totalSeconds % 60;
        let minutes = Math.floor(totalSeconds / 60);

        seconds = (seconds < 10 )? `0${seconds}`:seconds;
        minutes = (minutes < 10 )? `0${minutes}`:minutes;

        return `${minutes}:${seconds}`;
    },

    render() {
        return (
            <div></div>
        );
    }
});