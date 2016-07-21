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

        it('should set state to started and countdown', (done)=> {
            let countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.handleSetCountdown(10);

            Expect(countdown.state.count).toBe(10);
            Expect(countdown.state.countdownStatus).toBe('started');

            setTimeout(()=>{
                Expect(countdown.state.count).toBe(9);
                done();
            },1001);
        });

        it('count should never be less than zero', (done)=> {
            let countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.handleSetCountdown(3);

            setTimeout(()=>{
                Expect(countdown.state.count).toBe(0);
                done();
            },3001);
        });
    });

});