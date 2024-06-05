import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { CounterApp } from './01-useState/CounterApp';
// import { HooksApp } from './HooksApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    <CounterApp />
  </React.StrictMode>,
)
