import React, { useState, useEffect } from 'react'
import { departmentService } from "@/_services";

export default function Department() {

    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        departmentService.getAll().then((x) => setDepartments(x));
    }, []);

    return (
        <>
        <label className="mr-3">Ort der Anstellung</label>
            <select name="department" id="department-select">
                {departments ? departments && departments.map((department) => (
                    <option key={department.id} value={department.id}>{department.name}</option>
                )) : null}
            </select>
        </>
    )
}
