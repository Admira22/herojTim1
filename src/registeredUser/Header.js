import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Link from '@mui/material/Link';
import Button from "@mui/material/Button";
import {useCallback, useContext} from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import {Form} from "react-router-dom";
import {FormControl} from "@mui/material";
import {useParams} from "react-router";


const SearchBar = ({keyword, onChange}) => {
    const { keyWord } = useParams()
    const url = 'http://127.0.0.1:8000/'
    async function search(query) {
        try {
            const response = await fetch(`${url}search/?search=${keyWord}`);
            const data = await response.json();
            // Handle the response data, e.g., update the UI with the search results
            console.log(data);
        } catch (error) {
            // Handle any errors
            console.error(error);
        }
    }
    const BarStyle = {width:"20rem",background:"#F0F0F0", border:"none", padding:"0.5rem"};
    return (
        <input
            style={BarStyle}
            key="search-bar"
            value={keyWord}
            placeholder={"search news"}
            onChange={(e) => {
                search(e.target.value);
            }}
        />
    );
}



function Header() {
    let {user,logoutUser} = useContext(AuthContext)
    const titles = ["Logo","Lekcije", "Profil", "Blog", "Završni test"];

    const url = 'http://127.0.0.1:8000/'
     /*const debounce = (func, waitFor) => {
        let timeout = null;

        const debounced = (...args) => {
            if (timeout !== null) {
                clearTimeout(timeout);
                timeout = null;
            }
            timeout = setTimeout(() => func(...args), waitFor);
        };

        return debounced;
    };

        // debounce the function so that we send api calls once user stops typing
        const searchSomething = useCallback(
            debounce(async (value) => {
                try {
                    // Make your api call using whichever library you are using
                    // let response = await fetch(`${YOUR_SERVER_URL}/search?query=${value}`);
                    let response = axios.get(`${url}search/`)
                    console.log(response);
                } catch (error) {
                    console.log(error);
                }
            }, 500),
            []
        );
*/



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