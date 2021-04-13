import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Overview } from './Overview';
import { Users } from './users';
import Recruiting from './recruiting';
import { Main, TopBar } from '@/_components';

// Pfad für die Componenten im Adminbereich
const Admin = ({ match }) => {
    const { path } = match;

    return (
        <Main>
        <TopBar/>
                <Switch>
                    <Route exact path={path} component={Overview} />
                    <Route path={`${path}/users`} component={Users} />
                    <Route path={`${path}/recruiting`} component={Recruiting} />
                </Switch>
        </Main>
    );
}

export default Admin;