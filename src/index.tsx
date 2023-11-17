import React from 'react';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from 'routes/Routes';

import './index.scss';

const mainContent = <AppRoutes />;

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>{mainContent}</BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
