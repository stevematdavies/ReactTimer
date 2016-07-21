const React = require('react');
const ReactDOM = require('react-dom');
const Expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');
const Clock = require('Clock');



describe('Clock', () => {

    let clockComponent = TestUtils.renderIntoDocument(<Clock />);

    it('should exist', ()=> {
        Expect(Clock).toExist();
    });

    it('should return correctly formatted time', () => {

        let seconds = 615;
        let expected = '10:15';
        let actual = clockComponent.formatSeconds(seconds);

        Expect(actual).toBe(expected);
    }) ;

    it('should format seconds when mins & secs < 10', () => {

        let seconds = 61;
        let expected = '01:01';
        let actual = clockComponent.formatSeconds(seconds);

        Expect(actual).toBe(expected);
    }) ;
});

describe('Render Clock', ()=> {

    let clockComponent = TestUtils.renderIntoDocument(<Clock totalSeconds={61} />);

    it('Should render the clock to output', () => {

        let $el = $(ReactDOM.findDOMNode(clockComponent));
        let actualText = $el.find('clock-text').text();

        Expect(actualText).toBe('01:01');

    });

});