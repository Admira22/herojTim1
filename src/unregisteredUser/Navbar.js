import React from 'react';
import './Navbar.css';
import { useState, useEffect } from 'react';
import logo from "../images/herojLogo.png";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
function Navbar() {

    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [searchText, setSearchText] = useState('');
    const handleSearch = () => {
        setSearchText('');
    };

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768); // Promijenite ovu vrijednost prema potrebama
        };

        handleResize(); // Provjerite veličinu ekrana prilikom prvog renderiranja
        window.addEventListener('resize', handleResize); // Dodajte event slušatelja za promjenu veličine ekrana

        return () => {
            window.removeEventListener('resize', handleResize); // Maknite event slušatelja prilikom unmounta komponente
        };
    }, []);

    return (
        <header className="header_section">
            <div id="main-container" className="container">
                <nav className={`custom_nav-container ${isSmallScreen ? 'flex-column' : 'flex-row'}`}>
                    <a className="navbar-brand" href="#">
            <span>
              <img src={logo} width="118px" height="118px" alt={logo}/>
            </span>
                    </a>

                    <div className="navbar-nav">
                        <a className="nav-link" href="/">Početna <span className="sr-only">(current)</span></a>
                        <a className="nav-link" href="#">Prijava</a>
                        <a className="nav-link" href="#">Registracija</a>
                        <div className="search-container">
                        <input
                            type="text"
                            placeholder="Pretraži"
                            className="search-input"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <button type="button" className="search-button" onClick={handleSearch}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                    </div>

                </nav>
            </div>
        </header>
    );

}

export default Navbar;
