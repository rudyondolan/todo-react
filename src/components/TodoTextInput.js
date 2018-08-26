/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class TodoTextInput extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool,
  }

  constructor(props) {
    super(props);
    this.state = {
      text: props.text || '',
    };
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

  handleSubmit = (e) => {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
      if (this.props.newTodo) {
        this.setState({ text: '' });
      }
    }
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleBlur = (e) => {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value);
    }
  }

  render() {
    console.log('render()');
    console.log('--------');
    return (
      <input
        className={
          classnames({
            edit: this.props.editing,
            'new-todo': this.props.newTodo,
          })
        }
        type="text"
        placeholder={this.props.placeholder}
        autoFocus="true"
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    );
  }
}
