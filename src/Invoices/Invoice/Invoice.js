import React from 'react';

import './Invoice.scss';

export function Invoice(props) {
  return (
    <div>
      <h1>Invoice</h1>I am at Invoice {props.invoiceId}
    </div>
  );
}
