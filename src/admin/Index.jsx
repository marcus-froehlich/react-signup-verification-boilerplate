import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Overview } from './Overview';
import { Users } from './users';
import { Recruiting } from './recruiting';

// Pfad für die Componenten im Adminbereich
function Admin({ match }) {
    const { path } = match;

    return (
        <div className="p-4">
            <div className="container">
                <Switch>
                    <Route exact path={path} component={Overview} />
                    <Route path={`${path}/users`} component={Users} />
                    <Route path={`${path}/recruiting`} component={Recruiting} />
                </Switch>
            </div>
        </div>
    );
}

export { Admin };