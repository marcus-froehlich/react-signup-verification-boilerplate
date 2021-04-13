import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Overview } from './Overview';
import { Document } from './Dokuments/Documents';

import { UserForm } from './UserQuickApplication/UserForm';
import { Main, TopBar } from '@/_components';


const User = ({ match }) => {
    const { path } = match;

    return (
        <Main>
            <TopBar />
            <Switch>
                <Route exact path={path} component={Overview} />
                <Route path={`${path}/document`} component={Document} />
                <Route path={`${path}/user_quick_application`} component={UserForm} />
            </Switch>
        </Main>
    );
}

export default User;