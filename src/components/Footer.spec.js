/* globals jest */
import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import Footer from './Footer';
import { SHOW_ALL, SHOW_ACTIVE } from '../constants/TodoFilters';

const setup = propOverrides => {
  const props = Object.assign({
    completedCount: 0,
    activeCount: 0,
    filter: SHOW_ALL,
    onClearCompleted: jest.fn(),
    onShow: jest.fn(),
  }, propOverrides);

  const renderer = createRenderer();
  renderer.render(<Footer {...props} />);
  const output = renderer.getRendererOutput();

  return {
    props,
    output,
  };
};

const getTextContent = (elem) => {
  const children = Array.isArray(elem.props.children) ? elem.props.children : [elem.props.children];

  return children.reduce((out, child) => out + (child.props ? getTextContent(child) : child), '');
};

describe('components', () => {
  describe('Footer', () => {
    it('should render container', () => {
      const { output } = setup();
      expect(output.type).toBe('footer');
      expect(output.props.className).toBe('footer');
    });
  });
});
