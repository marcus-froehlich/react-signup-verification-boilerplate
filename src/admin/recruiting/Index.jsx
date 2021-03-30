import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { List } from './List';
import { Add } from './Add';
import { Edit } from './Edit';
import Applicants from './Applicants'

const Recruiting = ({ match }) => {
    const { path } = match;    
    return (
        <Switch>
            <Route exact path={path} component={List} />
            <Route path={`${path}/add`} component={Add} />
            <Route path={`${path}/edit/:id`} component={Edit} />
            <Route path={`${path}/applicants`} component={Applicants} />
            
        </Switch>
    );
}

export default Recruiting;