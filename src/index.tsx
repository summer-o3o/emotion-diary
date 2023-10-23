import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/common.css';
import Router from './Router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<Router />);
