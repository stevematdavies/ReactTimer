const React = require('react');
const ReactDOM = require('react-dom');
const Expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');
const Timer = require('Timer');


describe('Timer', ()=>{

    it('should exist', ()=> Expect(Timer).toExist() );

    describe('Change button values with state change', () => {

        it('should have intial state as \"stopped\" but set state to \"started\"', ()=> {
            let timer = TestUtils.renderIntoDocument(<Timer />);
            let currentStatus = timer.state.timerStatus;
            Expect(currentStatus).toBe('stopped');
        });

        it('should have initial button value as \"Start\" but change to \"Stop\" on click', ()=> {
            let timer = TestUtils.renderIntoDocument(<Timer />);
            let $el = $(ReactDOM.findDOMNode(timer));
            let startButton = $el.find('button:contains(Start)');

            Expect(startButton.length).toBe(1);

            TestUtils.Simulate.click($el.find('button:contains(Start)')[0]);

            let stopButton = $el.find('button:contains(Stop)');
            Expect(stopButton.length).toBe(1);
        });

    });

    describe('Count values should be updated with stop start and clear buttons', ()=> {

        it('should have initial count of zero and start counting when started, and stop counting when stopped', (done) => {
            let timer = TestUtils.renderIntoDocument(<Timer />);
            let $el = $(ReactDOM.findDOMNode(timer));
            Expect(timer.state.count).toBe(0);

            TestUtils.Simulate.click($el.find('button:contains(Start)')[0]);

            setTimeout(()=>{
                Expect(timer.state.count).toBe(3);
                TestUtils.Simulate.click($el.find('button:contains(Stop)')[0]);
                done();
            },3000);

        });

        it('should have reset the count to zero on clear and set status to stopped', (done) => {
            let timer = TestUtils.renderIntoDocument(<Timer />);
            let $el = $(ReactDOM.findDOMNode(timer));

            TestUtils.Simulate.click($el.find('button:contains(Start)')[0]);

            setTimeout(()=>{
                TestUtils.Simulate.click($el.find('button:contains(Clear)')[0]);
                Expect(timer.state.timerStatus).toBe('stopped');
                Expect(timer.state.count).toBe(0);
                done();
            },3000);
        });
    });
});