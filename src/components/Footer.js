/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters';

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed',
};

export default class Footer extends Component {
  static propTypes = {
    completedCount: PropTypes.number.isRequired,
    activeCount: PropTypes.number.isRequired,
    filter: PropTypes.string.isRequired,
    onClearCompleted: PropTypes.func.isRequired,
    onShow: PropTypes.func.isRequired,
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

  componentDidCatch(error, info) {
    console.log('componentDidCatch()');
    console.log('error', error);
    console.log('info', info);
    console.log('this', this);
    console.log('-------------------');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount()');
    console.log('----------------------');
  }

  renderTodoCount() {
    const { activeCount } = this.props;
    const itemWord = activeCount === 1 ? 'item' : 'items';

    return (
      <span className="todo-count">
        <strong>{ activeCount || 'No' }</strong> { itemWord } left
      </span>
    );
  }

  renderFilterLink(filter) {
    const title = FILTER_TITLES[filter];
    const { filter: selectedFilter, onShow } = this.props;

    return (
      <a
        className={classnames({ selected: filter === selectedFilter })}
        style={{ cursor: 'pointer' }}
        onClick={() => onShow(filter)}
      >
        { title }
      </a>
    );
  }

  renderClearButton() {
    const { completedCount, onClearCompleted } = this.props;

    if (completedCount > 0) {
      return (
        <button className="clear-completed" onClick={onClearCompleted}>
          Clear completed
        </button>
      );
    }

    return null;
  }

  render() {
    console.log('render()');
    console.log('--------');
    return (
      <footer className="footer">
        {this.renderTodoCount()}
        <ul className="filters">
          {[SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map(filter => (
            <li key={filter}>
              {this.renderFilterLink(filter)}
            </li>
          ))}
        </ul>
        {this.renderClearButton()}
      </footer>
    );
  }
}
