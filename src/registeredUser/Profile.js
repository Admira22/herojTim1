import Header from "./Header";
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {TableCell} from "@mui/material";
import Typography from '@mui/material/Typography';
import  Progres from "./Progres";
import Footer from "./Footer";
import Info from "./Info";
import {useContext, useEffect, useState} from "react";
import AuthContext from "../context/AuthContext";


function Circle({ color, text }) {
    const circleStyle = {
        borderRadius: '50%',
        width: '20px',
        height: '20px',
        backgroundColor: color,
    };
    return (
        <div style={circleStyle}>
            <Typography variant="subtitle1" align="center" style={{ marginLeft: '25px' }}>
                {text}
            </Typography>
        </div>
    );
}

function Profile(){
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
            <Grid container spacing={3}>
                <Grid item md={8}>
                    <TableContainer>
                        <Table
                            sx={{marginLeft:5,width:"90%"}}>
                            <TableHead>
                                <TableRow>
                                    <TableCell align={"center"} style={{backgroundColor:"#931621",color:"white"}} colSpan={2}>
                                        <Typography fontSize={18} fontWeight={"bold"}>
                                            PODACI O KORISNIKU
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody sx={{backgroundColor:"whitesmoke"}}>
                                    <TableRow key={profile.id}>
                                        <TableCell component="th" scope="row" align="right">
                                            <Typography fontWeight={"bold"} fontSize={18}>
                                               Ime
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="left">
                                            <Typography fontSize={18}>
                                                {profile.firstName}
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                <TableRow key={profile.id}>
                                    <TableCell component="th" scope="row" align={"right"}>
                                        <Typography fontWeight={"bold"} fontSize={18}>
                                            Prezime
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography fontSize={18}>
                                            {profile.lastName}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow key={profile.id}>
                                    <TableCell component="th" scope="row" align={"right"}>
                                        <Typography fontWeight={"bold"} fontSize={18}>
                                            Email
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography fontSize={18}>
                                            {profile.email}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow key={profile.id}>
                                    <TableCell component="th" scope="row" align={"right"}>
                                        <Typography fontWeight={"bold"} fontSize={18}>
                                            Lokalna zajednica
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography fontSize={18}>
                                            {profile.lc}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow key={profile.id}>
                                    <TableCell component="th" scope="row" align={"right"}>
                                        <Typography fontWeight={"bold"} fontSize={18}>
                                            Dijete
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography fontSize={18}>
                                            {profile.child}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                  {/* <Button variant="contained" color="success" size={"large"}
                            Ovdje treba dodat marginu ili makar izravnat dugme sa tabelom
                            sx={{marginBlockStart:3,marginBlockEnd:3}}>UREDI
                    </Button>*/}
                </Grid>
                <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    {/*Ovdje jos treba dodat kad se smanji full da se odvoji*/}
                    <Typography variant={"h4"} sx={{ mb: 2 }}>
                        MOJ PROGRES
                    </Typography>
                        <br/>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '25vh' }}>
                        <Progres progress={profile.progres} />
                    </div>
                    <Grid container spacing={3} direction="column" alignItems="left">
                        <Grid item>
                            <Circle color="#931621" text="Pregledano" />
                        </Grid>
                        <Grid item>
                            <Circle color="#e57373" text="Nepregledano" />
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
            <Footer/>
        </React.Fragment>

    );
}
export default Profile;