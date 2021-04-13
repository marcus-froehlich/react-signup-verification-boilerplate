import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Details } from './Details';
import { Update } from './Update';
import { Main, TopBar } from '@/_components';

function Profile({ match }) {
    const { path } = match;

    return (
        <Main>
            <TopBar />
            <Switch>
                <Route exact path={path} component={Details} />
                <Route path={`${path}/update`} component={Update} />
            </Switch>
        </Main>
    );
}

export { Profile };