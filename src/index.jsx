import React from 'react';
import { Router } from 'react-router-dom';
import { render } from 'react-dom';

import { history } from './_helpers';
import { accountService } from './_services';
import { App } from './app';

import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';

// attempt silent token refresh before startup
accountService.refreshToken().finally(startApp);

function startApp() { 
    render(
        <Router history={history}>
            <App />
        </Router>,
        document.getElementById('app')
    );
}