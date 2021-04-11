import React from 'react';

import { accountService } from '@/_services';

function Home() {
    const user = accountService.userValue;
    
    return (
        <div className="p-4">
            <div className="container">
                <h1>Hallo {user.firstName}!</h1>
                <button className="btn">Test Sass Button</button>
                <p></p>
            </div>
        </div>
    );
}

export { Home };