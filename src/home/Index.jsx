import React from 'react';
import { Main, CardBox, TopBar, RecentNewUser } from '@/_components';
import { accountService } from '@/_services';

function Home() {
    const user = accountService.userValue;

    return (
        <Main>
            <TopBar/>
            <CardBox/>
            <RecentNewUser/>
        </Main>
    );
}

export { Home };