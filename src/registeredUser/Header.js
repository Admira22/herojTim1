import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Button from "@mui/material/Button";
import {useContext, useEffect, useState} from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate} from "react-router-dom";
import axios from "axios";



const SearchBar = () => {
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
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Pretraži..."
            />

            <button onClick={handleSearch}>
               Pretraži
            </button>
        </div>
    );
}



function Header() {
    let {user,logoutUser} = useContext(AuthContext)
    const titles = ["Logo","Lekcije", "Profil", "Blog", "Završni test"];

    return (
        <React.Fragment>
            <Toolbar  component="nav"
                      variant="regular" sx={{justifyContent: 'space-between', overflowX: 'auto',backgroundColor: '#931621', paddingTop: 1}} >
                {titles.map((titles) =>(
                    <Link color="#ffebee"
                          noWrap
                          // key={title}
                          variant="body1"
                          // href = {'/blog'}
                          //href={titles}
                          //href={`/${titles}`}
                          href={titles=== "Završni test" ? '/Test' : `/${titles}`}
                          sx={{ p: 1, flexShrink: 0}}> {titles} </Link>
                ))}
                {user ? (
                    <Button onClick={logoutUser} style={{ color: 'white' }}>odjavi se</Button>
                ):(
                    <Link to="/login"></Link>
                )}

              <SearchBar/>
            </Toolbar>
        </React.Fragment>
    );
}

export default Header;