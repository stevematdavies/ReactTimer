const React = require('react');
const Navigation = require('Navigation');

module.exports = (props)  => {
    return (
        <div>
            <div>
                <div>
                    <Navigation />
                    { props.children }
                </div>
            </div>
        </div>
    )
};
    

