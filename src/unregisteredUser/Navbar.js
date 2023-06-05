import React, {useEffect, useState} from 'react';
import './Navbar.css';
import {useNavigate} from "react-router-dom";
import axios from "axios";


function Navbar() {
    const navigate = useNavigate();
    const url = 'http://127.0.0.1:8000/'

    const [searchTerm, setSearchTerm] = useState('');

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
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Pretraži..."
                />

                <button onClick={handleSearch}>
                    Pretraži
                </button>
            </ul>
        </nav>
    );
}

export default Navbar;
