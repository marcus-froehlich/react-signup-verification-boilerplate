import React, { useState, useContext } from 'react';
import { Main, DepartmentCardBox, TopBar, RecentNewUser } from '@/_components';
import { Role } from "@/_helpers";
import { accountService } from '@/_services';
import { DepartmentContext } from '../_context/DepartmentContext';

function Home() {

    const user = accountService.userValue;
    const [department, setDepartment] = useContext(DepartmentContext);

    if (!user) return null;
    
    return (
        <Main>
            <TopBar/>
            
            {user.role === Role.Admin && !department && <div><DepartmentCardBox/></div> }
            {user.role === Role.Admin && <div><RecentNewUser/></div> }
            
        </Main>
    );
}

export { Home };