/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoTextInput from './TodoTextInput';

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    console.log('constructor()');
    console.log('props', props);
    console.log('-------------');
  }

  componentWillMount() {
    console.log('componentWillMount()');
    console.log('--------------------');
  }

  componentDidMount() {
    console.log('componentDidMount()');
    console.log('-------------------');
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps()');
    console.log('nextProps', nextProps);
    console.log('---------------------------');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate()');
    console.log('nextProps', nextProps);
    console.log('nextState', nextState);
    console.log('-----------------------');
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate()');
    console.log('nextProps', nextProps);
    console.log('nextState', nextState);
    console.log('-----------------------');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate()');
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    console.log('--------------------');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount()');
    console.log('----------------------');
  }

  componentDidCatch(error, info) {
    console.log('componentDidCatch()');
    console.log('error', error);
    console.log('info', info);
    console.log('this', this);
    console.log('-------------------');
  }

  handleSave = (text) => {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    console.log('render()');
    console.log('--------');
    return (
      <header className="header">
        <h1>todos</h1>
        <TodoTextInput newTodo onSave={this.handleSave} placeholder="What needs to be done?" />
      </header>
    );
  }
}
