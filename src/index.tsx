import React from 'react';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>Hello, World!</BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
