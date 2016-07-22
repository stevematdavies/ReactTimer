const React = require('react');
const ReactDOM = require('react-dom');
const Expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');
const CountdownForm = require('CountdownForm');


describe('CountdownForm', () => {

    it ( 'should exist', () => Expect ( CountdownForm ).toExist () );

    it('should call onSetCountdown if valid seconds are entered', () => {
        let spy = Expect.createSpy();
        let countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>)
        let $el = $(ReactDOM.findDOMNode(countdownForm));
        countdownForm.refs.seconds.value = '109';
        TestUtils.Simulate.submit($el.find('form')[0]);

        Expect(spy).toHaveBeenCalledWith(109);
    });

    it('should NOT call onSetCountdown if invalid seconds are entered' , () => {
        let spy = Expect.createSpy();
        let countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>)
        let $el = $(ReactDOM.findDOMNode(countdownForm));
        countdownForm.refs.seconds.value = '';
        TestUtils.Simulate.submit($el.find('form')[0]);

        Expect(spy).toNotHaveBeenCalled();
    });

});