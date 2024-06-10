import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { FocusScreen } from './04-useRef/FocusScreen';
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <MultipleCustomHooks />
  // </React.StrictMode>,
)
