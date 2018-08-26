/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      editing: false,
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

  handleDoubleClick = () => {
    this.setState({ editing: true });
  }

  handleSave = (id, text) => {
    if (text.length === 0) {
      this.props.deleteTodo(id);
    } else {
      this.props.editTodo(id, text);
    }

    this.setState({ editing: false });
  }

  handleCompleteTodo = () => {
    const { todo, completeTodo } = this.props;
    completeTodo(todo.id);
  }

  handleDeleteTodo = () => {
    const { todo, deleteTodo } = this.props;
    deleteTodo(todo.id);
  }

  render() {
    console.log('render()');
    console.log('--------');
    const { todo } = this.props;
    const text = '';

    let element;

    if (this.state.editing) {
      element = (
        <TodoTextInput
          text={todo.text}
          editing={this.state.editing}
          onSave={this.handleSave(todo.id, text)}
        />
      );
    } else {
      element = (
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={this.handleCompleteTodo}
          />
          <label onDoubleClick={this.handleDoubleClick}>
            {todo.text}
          </label>
          <button className="destroy" onClick={this.handleDeleteTodo} />
        </div>
      );
    }

    return (
      <li className={classnames({
        completed: todo.completed,
        editing: this.state.editing,
      })}
      >
        {element}
      </li>
    );
  }
}
