// @flow

import React from 'react';
import './App.scss';

import { Link, Router } from '@reach/router';
import { Home } from './home/Home';
import { Dashboard } from './dashboard/Dashboard';
import { Invoices } from './Invoices/Invoices';
import { Invoice } from './Invoices/Invoice/Invoice';

function App() {
  return (
    <div>
      <h1>
        Tutorial! for {process.env.REACT_APP_NAME}(
        {process.env.REACT_APP_ENVIRONMENT})
      </h1>
      <nav>
        <Link to="/">Home</Link>{' '}
        <Link to="dashboard/users">Dashboard For Users</Link>{' '}
        <Link to="dashboard/admins">Dashboard For Admins</Link>{' '}
        <Link to="invoices">Invoices</Link>
      </nav>
      <Router>
        <Home path="/" />
        <Dashboard path="/dashboard/:name" />
        <Invoices path="/invoices">
          <Invoice path=":invoiceId"></Invoice>
        </Invoices>
      </Router>
    </div>
  );
}

export default App;
