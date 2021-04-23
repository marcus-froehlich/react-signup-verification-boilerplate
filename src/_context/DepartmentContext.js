import React, { useState, createContext, useEffect } from 'react';
import { globalService } from '@/_services';

export const DepartmentContext = createContext();

export const DepartmentProvider = props => {
    const [department, setDepartment] = useState();

    useEffect(() => {
        const isDepartmentSet = globalService.isSet().then((x) => setDepartment(x));
    }, []);

    return (
        <DepartmentContext.Provider value={[department, setDepartment]}>
            {props.children}
        </DepartmentContext.Provider>
    );
};