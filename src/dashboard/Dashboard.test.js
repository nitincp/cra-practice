import React from 'react';
import ReactDOM from 'react-dom';
import { Dashboard } from './Dashboard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dashboard name="test dashboard" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
