import React, { useState, useEffect } from 'react';
import { accountService } from '../_services/account.service';


function RecentNewUser() {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        accountService.getAll().then(x => setUsers(x));
    }, []);

    return (
        <div className="details">
            <div></div>
            <div className="recentNewUser">
                <div className="cardHeader">
                    <h4>Neueste Anmeldungen</h4>
                </div>
                <table>
                    <tbody>
                        {users && users.map(user =>
                            <tr key={user.id}>
                                <td>
                                    <div className="imgBx"><i className="fa fa-user-circle-o" aria-hidden="true"></i></div>
                                </td>
                                <td><h4>{user.title}. {user.firstName} {user.lastName}</h4><span>{user.email}</span></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export { RecentNewUser };
