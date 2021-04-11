import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Overview } from './Overview';
import { Document } from './Dokuments/Documents';

import { UserForm } from './UserQuickApplication/UserForm';


const User = ({ match }) => {
    const { path } = match;

    return (
        <div className="p-4">
            <div className="container">
                <Switch>
                    <Route exact path={path} component={Overview} />
                    <Route path={`${path}/document`} component={Document} />
                    <Route path={`${path}/user_quick_application`} component={UserForm} />
                </Switch>
            </div>
        </div>
    );
}

export default User;