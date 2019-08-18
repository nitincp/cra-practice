import React from 'react';
import ReactDOM from 'react-dom';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Invoice } from './Invoice';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Invoice invoiceId="12" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('show invoice message', () => {
  const { getByText } = render(<Invoice invoiceId="12" />);
  expect(getByText('I am at Invoice 12')).toBeInTheDocument();
});
