import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Button from "@mui/material/Button";
import {useContext, useEffect, useState} from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate} from "react-router-dom";
import axios from "axios";
import herojLogo from "../images/herojLogo.png";
import SearchIcon from "@mui/icons-material/Search";



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
        navigate(`../pretraga/${response.data[0]?.id || 'null'}`, { replace: true })
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
                style={{
                    width:'200px',
                    height: '35px',
                    border: '1px solid white',
                    color: 'black',
                    fontWeight:'bolder',
                    padding: '8px',
                    borderRadius: '20px',
                }}
            />

            <button onClick={handleSearch} style={{
                backgroundColor: 'transparent',
                border: 'none',
                padding: '4px',
                cursor: 'pointer',
            }}>
                <SearchIcon
                sx={{color:'white'}}/>
            </button>
        </div>
    );
}



function Header() {
    let {user,logoutUser,authTokens} = useContext(AuthContext)
    console.log(user)
    const titles = ["Lekcije", "Profil", "Blog"];

    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate('/Logo');
    };

    const [disableButton, setDisableButton] = useState(false);

    let [profile, setProfile] = useState([])

    const url = 'http://127.0.0.1:8000/'

    useEffect(()=> {
        getNotes()
    }, [])

    let getNotes = async() =>{
        let response = await fetch(`${url}profile/`, {
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + String(authTokens.access)
            }
        })
        let data = await response.json()
       // console.log(data)

        if(response.status === 200){
            setProfile(data)
        }else if(response.statusText === 'Unauthorized'){
            logoutUser()
        }

    }

    const handleClick = async () => {
        try {
            console.log("desckooo")
            if (profile.progres < 100) {
                console.log("o hej")
                setDisableButton(false)
            }
        }
        catch (error){
            console.log(error)
        }
        finally {
            if (profile.progres === 100){
                navigate('/Test')
            }
            else {
                alert('Vaš progres nije zadovoljavajući, ne možete pristupiti završnom testu!')
            }
        }
    };


    return (
        <React.Fragment>
            <Toolbar  component="nav"
                      variant="regular" sx={{justifyContent: 'space-between', overflowX: 'auto',backgroundColor: '#931621', paddingTop: 1}} >
                <Link to="/"  sx={{ p: 1, flexShrink: 0, marginTop:1, cursor: 'pointer' }} onClick={handleLogoClick}>
                    <span>
                        <img src={herojLogo} width="80px" height="80px" alt={herojLogo} />
                    </span>
                </Link>
                {titles.map((titles) =>(
                    <Link color="#ffebee"
                          noWrap
                          variant="body1"
                          href={`/${titles}`}
                          //href={titles=== "Završni test" ? '/Test' : `/${titles}`}
                          sx={{ p: 1, flexShrink: 0, textDecoration: 'none',
                              '&:visited': {
                                  color: '#ffebee',
                              },}}> {titles.toUpperCase()} </Link>
                ))}
                {user ?
                    (
                    <Button disabled={disableButton} onClick={handleClick}  style={{ color: "#ffebee" }}>završni test</Button>
                ):(
                    <Link to="/Test"></Link>
                )}
                {user ? (
                    <Button onClick={logoutUser} style={{ color: "#ffebee" }}>odjavi se</Button>
                ):(
                    <Link to="/login"></Link>
                )}

              <SearchBar/>
            </Toolbar>
        </React.Fragment>
    );
}

export default Header;