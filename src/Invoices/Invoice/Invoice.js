import React from 'react';

import './Invoice.scss';

export function Invoice(props) {
  return (
    <div>
      <h1>Invoice For Me.</h1>
      <p>I am at Invoice {props.invoiceId}</p>
    </div>
  );
}
