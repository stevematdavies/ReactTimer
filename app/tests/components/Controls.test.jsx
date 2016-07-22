const React = require('react');
const ReactDOM = require('react-dom');
const Expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');
const Controls = require('Controls');


describe('Controls', ()=> {

    it('should exist', ()=> {
       Expect(Controls).toExist();
    });

    describe('render', ()=> {

        it('should render pause when started', ()=> {
            let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
            let $el = $(ReactDOM.findDOMNode(controls));
            let pauseButton = $el.find('button:contains(Pause)');

            Expect(pauseButton.length).toBe(1); // One pause button only
        });

        it('should render start when paused', ()=> {
            let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
            let $el = $(ReactDOM.findDOMNode(controls));
            let startButton = $el.find('button:contains(Start)');

            Expect(startButton.length).toBe(1); // One start button only
        });

    });

});