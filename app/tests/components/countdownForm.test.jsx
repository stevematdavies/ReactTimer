const React = require('react');
const ReactDOM = require('react-dom');
const Expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');
const CountdownForm = require('CountdownForm');



describe('CountdownForm', () => {

    it ( 'should exist', () => {
        Expect ( CountdownForm ).toExist ();
    });

});