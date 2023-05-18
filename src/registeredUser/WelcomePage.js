import * as React from "react";
import Info from "./Info";
import Footer from "./Footer";
import News from "./News";
import Help from "./Help";
import Grid from "@mui/material/Grid";
import {useContext, useEffect, useState} from "react";
import AuthContext from "../context/AuthContext";
import Header from "./Header";
import {styled} from "@mui/material/styles";


function WelcomePage() {
    const H1 = styled("h1")(({theme}) =>({
        backgroundColor: theme.palette.primary,
        ...theme.typography.h4,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.secondary.dark
    }));
    let {authTokens, logoutUser} = useContext(AuthContext)
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
        console.log(data)

        if(response.status === 200){
            setProfile(data)
        }else if(response.statusText === 'Unauthorized'){
            logoutUser()
        }

    }

    return(
        <React.Fragment>
            <Header/>
            <Info/>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                   {/*{user && <H1>Zdravo, {user.username}! </H1>}*/}
                            <H1 key={profile.id} > Zdravo, {profile.firstName}!</H1>

                </Grid>
                <Grid item xs={8}>
                    <News/>
                </Grid>
                <Grid item xs={4}>
                    <Help/>
                </Grid>
            </Grid>
            <Footer/>
        </React.Fragment>
    );
}
export default WelcomePage;