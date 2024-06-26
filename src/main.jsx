import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import './index.css';
import { MainApp } from './09-useContext/MainApp';

const router = createBrowserRouter([
  {
    path: '*',
    element: <MainApp />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={ router } />
  // </React.StrictMode>,
)
