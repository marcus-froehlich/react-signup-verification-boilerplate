import React from 'react';
import { Main, CardBox, TopBar, RecentNewUser } from '@/_components';
import { Role } from "@/_helpers";
import { accountService } from '@/_services';

function Home() {

    const user = accountService.userValue;

    if (!user) return null;
    
console.log(user);

    return (
        <Main>
            <TopBar/>
            
            {user.role === Role.Admin && <div><CardBox/><RecentNewUser/></div> }
            
        </Main>
    );
}

export { Home };