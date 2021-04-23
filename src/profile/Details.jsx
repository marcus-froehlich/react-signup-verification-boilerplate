import React from 'react';
import { Link } from 'react-router-dom';

import { accountService } from '@/_services';

function Details({ match }) {
    const { path } = match;
    const user = accountService.userValue;

    return (
        <div className="container-xl">
            <h1>Ihr Profil</h1>
            <p>
                <strong>Name: </strong> {user.title} {user.firstName} {user.lastName}<br />
                <strong>Email: </strong> {user.email}<br />
                <strong>Profilbild Hochladen: </strong>
                <input
                    type="file"
                    name="file"
                    id="file-upload"                    
                />
            </p>
            <p><Link to={`${path}/update`} className="btn-p">Update Profil</Link></p>
        </div>
    );
}

export { Details };