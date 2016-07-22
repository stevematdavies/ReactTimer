const React = require('react');
const ReactDOM = require('react-dom');
const Expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');
const Countdown = require('Countdown');


describe('Countdown', ()=>{

    let countdown = TestUtils.renderIntoDocument(<Countdown />);

    it('should exist', ()=> Expect(Countdown).toExist() );

    describe('handleSetCountdown', () => {

        it('should set state to started and countdown', (done)=> {

            countdown.handleSetCountdown(10);

            Expect(countdown.state.count).toBe(10);
            Expect(countdown.state.countdownStatus).toBe('started');

            setTimeout(()=>{
                Expect(countdown.state.count).toBe(9);
                done();
            },1001);
        });

        it('count should never be less than zero', (done)=> {

            countdown.handleSetCountdown(3);

            setTimeout(()=>{
                Expect(countdown.state.count).toBe(0);
                done();
            },3001);
        });

        it('should pause countdown on paused status', (done)=>{

            countdown.handleSetCountdown(3);
            countdown.handleStatusChange('paused');

            setTimeout(()=>{
                Expect(countdown.state.count).toBe(3);
                Expect(countdown.state.countdownStatus).toBe('paused');
                done();
            },1000);

        });

        it('should reset the count and update status to \"stopped\" when stopped', (done)=>{

            countdown.handleSetCountdown(3);
            countdown.handleStatusChange('stopped');

            setTimeout(()=>{
                Expect(countdown.state.count).toBe(0);
                Expect(countdown.state.countdownStatus).toBe('stopped');
                done();
            },1000);

        });
    });


});