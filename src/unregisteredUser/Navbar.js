import React, {useEffect, useState} from 'react';
import './Navbar.css';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import herojLogo from "../images/herojLogo.png";
import SearchIcon from '@mui/icons-material/Search';



function Navbar() {
    const navigate = useNavigate();
    const url = 'http://127.0.0.1:8000/'

    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    async function handleSearch(){
        const response =  await axios.get(`${url}search/?search=${searchTerm}`)

        console.log(response.data[0]?.id)
        navigate(`../bolest/${response.data[0]?.id || 'null'}`, { replace: true })

    }

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className="header_section">
            <div id="main-container" className="container">
                <nav className={`custom_nav-container ${isSmallScreen ? 'flex-column' : 'flex-row'}`}>
                    <a className="navbar-brand" href="/">
            <span>
              <img src={herojLogo} width="118px" height="118px" alt={herojLogo}/>
            </span>
                    </a>

                    <div className="navbar-nav">
                        <a className="nav-link" href="/">Početna <span className="sr-only">(current)</span></a>
                        <a className="nav-link" href="/login">Prijava</a>
                        <a className="nav-link" href="/signUp">Registracija</a>
                        <div className="search-container">
                            <input
                                type="text"
                                placeholder="Pretraži"
                                className="search-input"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button type="button" className="search-button" onClick={handleSearch}>
                                <SearchIcon/>
                            </button>
                        </div>
                    </div>

                </nav>
            </div>
        </header>
    );
}

export default Navbar;
