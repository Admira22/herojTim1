import React from 'react';
import './Navbar.css';


function Navbar() {
    return (
        <nav>
            <span>
              Heroj
            </span>
            <ul>
                <li>
                    <a href="/">Početna</a>
                </li>

                <li>
                    <a href="/src/unregisteredUser/HeartAttack">Prijava</a>
                </li>
                <li>
                    <a href="/src/unregisteredUser/HeartAttack">Registracija</a>
                </li>


            </ul>
        </nav>
    );
}

export default Navbar;
