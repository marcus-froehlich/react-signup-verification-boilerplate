import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { FileUpload } from './FileUpload';
import { Document } from './Documents';

const Dokuments = ({ match }) => {
    const { path } = match;

    return (
        <div className="p-4">
            <div className="container">
                <Switch>
                    <Route exact path={path} component={Document} />
                    <Route path={`${path}/fileUpload`} component={FileUpload} />
                </Switch>
            </div>
        </div>
    );
}

export default Dokuments;