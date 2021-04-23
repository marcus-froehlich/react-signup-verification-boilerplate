import React, { useState, useEffect, useContext } from "react";
import { NavLink, Route } from "react-router-dom";

import { Role } from "@/_helpers";
import { accountService, globalService } from "@/_services";
import { DepartmentContext } from '../_context/DepartmentContext';

function Nav() {
  const [user, setUser] = useState({});
  const [department, setDepartment] = useContext(DepartmentContext);

  useEffect(() => {
    const subscription = accountService.user.subscribe((x) => setUser(x));
    return subscription.unsubscribe;
  }, []);

  // only show nav when logged in
  if (!user) return null;

  return (
    <div className="navigation">
      <ul>
        <li>
          <a href="/">
            <span className="icon"><i className="fa fa-apple" aria-hidden="true"></i></span>
            <span className="title">
              <h4>InFact Recruiting</h4>
            </span>
          </a>
        </li>
        <li>
          <a href="/">
            <span className="icon"><i className="fa fa-home" aria-hidden="true"></i></span>
            <span className="title">Dashboard</span>
          </a>
        </li>
        {user.role === Role.User && (
          <li>
            <a href="/user">
              <span className="icon"><i className="fa fa-address-card-o" aria-hidden="true"></i></span>
              <span className="title">Stellenausschreibungen</span>
            </a>
          </li>
        )}
        {user.role === Role.User && (
          <li>
            <a href="/user/document">
              <span className="icon"><i className="fa fa-file-text-o" aria-hidden="true"></i></span>
              <span className="title">Dokumentenverwaltung</span>
            </a>
          </li>
        )}
        {user.role === Role.User && (
          <li>
            <a href="/user/user_quick_application">
              <span className="icon"><i className="fa fa-bolt" aria-hidden="true"></i></span>
              <span className="title">Schnell Bewerbung</span>
            </a>
          </li>
        )}
        {user.role === Role.Admin && (
          <li>
            <a href="/admin/users">
              <span className="icon"><i className="fa fa-wrench" aria-hidden="true"></i></span>
              <span className="title">User verwalten</span>
            </a>
          </li>
        )}
        {user.role === Role.Admin && department && (
          <li>
            <a href="/admin/recruiting">
              <span className="icon"><i className="fa fa-address-card-o" aria-hidden="true"></i></span>
              <span className="title">Stellenausschreibung</span>
            </a>
          </li>
        )}
        <li>
          <a href="/profile">
            <span className="icon"><i className="fa fa-cog" aria-hidden="true"></i></span>
            <span className="title">Settings</span>
          </a>
        </li>
        <li>
          <a onClick={accountService.logout} href="#">
            <span className="icon"><i className="fa fa-lock" aria-hidden="true"></i></span>
            <span className="title">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export { Nav };
