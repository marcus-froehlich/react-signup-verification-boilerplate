import React from "react";

function toggleMenu() {
    let toggle = document.querySelector('.toggle');
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}

function TopBar() {

    return (
        <div className="topbar">
        <div className="toggle" onClick={toggleMenu}></div>
        {/* <div className="search">
            <label>
                <input type="text" placeholder="Search here" />
                <i className="fa fa-search" aria-hidden="true"></i>
            </label>
        </div> */}
        <div className="user">
            <a href="/profile">
            <img src="src/img/profil.jpg" alt="Profilbild" />
            </a>
        </div>
    </div>
    );
 }

export { TopBar };