import React, { useState, useEffect } from "react";
import { NavLink, Route } from "react-router-dom";

import { Role } from "@/_helpers";
import { accountService } from "@/_services";

function Nav() {
  const [user, setUser] = useState({});

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
              <span className="icon"><i class="fa fa-address-card-o" aria-hidden="true"></i></span>
              <span className="title">Stellenausschreibungen</span>
            </a>
          </li>
        )}
        {user.role === Role.User && (
          <li>
            <a href="/user/document">
              <span className="icon"><i class="fa fa-file-text-o" aria-hidden="true"></i></span>
              <span className="title">Dokumentenverwaltung</span>
            </a>
          </li>
        )}
        {user.role === Role.User && (
          <li>
            <a href="/user/user_quick_application">
              <span className="icon"><i class="fa fa-bolt" aria-hidden="true"></i></span>
              <span className="title">Schnell Bewerbung</span>
            </a>
          </li>
        )}
        {user.role === Role.Admin && (
          <li>
            <a href="/admin">
              <span className="icon"><i class="fa fa-wrench" aria-hidden="true"></i></span>
              <span className="title">Admin</span>
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
            <span className="title">LogOut</span>
          </a>
        </li>
      </ul>
    </div>

    // <Route path="/admin" component={AdminNav} />

  );
}

function AdminNav({ match }) {
  const { path } = match;

  return (<div>"Admin Menu"</div>);
}

export { Nav };
