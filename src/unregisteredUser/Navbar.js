import React, {useEffect, useState} from 'react';
import './Navbar.css';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import herojLogo from "../images/herojLogo.png";
import SearchIcon from '@mui/icons-material/Search';


function Navbar() {
    const navigate = useNavigate();
    const url = 'http://127.0.0.1:8000/'

    const [searchTerm, setSearchTerm] = useState('');
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [searchText, setSearchText] = useState('');

    async function handleSearch(){
        const response =  await axios.get(`${url}search/?search=${searchTerm}`)
        console.log('HEJ1')
        console.log(`${url}search/?search=${searchTerm}/`)
        console.log(response.data)
        setSearchTerm(response.data[0])
        console.log(searchTerm)
        console.log(response.data[0]?.id)
        navigate(`../bolest/${response.data[0]?.id || 'null'}`, { replace: true })
        console.log('HEJ2')

    }

    useEffect(()=>{
        //handleSearch()
    },[])
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
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
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
