const React = require('react');
const ReactDOM = require('react-dom');
const Expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');
const Countdown = require('Countdown');

describe('Countdown', ()=>{

    it('should exist', ()=> {
        Expect(Countdown).toExist();
    });

    describe('handleSetCountdown', () => {

        it('should set state to started and countdown', ()=> {
            let countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.handleSetCountdown(10);

            Expect(countdown.state.count).toBe(10);
            Expect(countdown.state.countdownStatus).toBe('started');
        });
    });

});