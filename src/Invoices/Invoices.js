import React from 'react';

import './Invoices.scss';
import { Link } from '@reach/router';

export function Invoices(props) {
  return (
    <div>
      <h1>Invoices</h1>
      <ul>
        <li>
          <Link to="/invoices/123">Invoice 123</Link>
        </li>
        <li>
          <Link to="/invoices/abc">Invoice ABC</Link>
        </li>
      </ul>

      {props.children}
    </div>
  );
}
