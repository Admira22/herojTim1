import React from 'react';
import './Navbar.css';


function Navbar() {
    return (
        <nav>
            <span className={"logo1"}>
              Heroj
            </span>
            <ul>
                <li>
                    <a href="/">Početna</a>
                </li>

                <li>
                    <a href="/login">Prijava</a>
                </li>
                <li>
                    <a href="/signup">Registracija</a>
                </li>


            </ul>
        </nav>
    );
}

export default Navbar;
