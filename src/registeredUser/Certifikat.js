import React, {useContext, useEffect, useState} from 'react';
import { renderToString } from 'react-dom/server';
import html2pdf from 'html2pdf.js';
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import myLogo from '../images/myLogo.png';
import Button from "@mui/material/Button";
import {styled} from "@mui/material/styles";
import AuthContext from "../context/AuthContext";

const MyComponent = () => {
    const H1 = styled("h1")(({theme}) =>({
        backgroundColor: theme.palette.primary,
        ...theme.typography.h2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.secondary.dark
    }));
    const H2 = styled("h2")(({theme}) =>({
        backgroundColor: theme.palette.primary,
        ...theme.typography.h4,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.secondary.main
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
    const generatePDF = () => {
        const componentHtml = renderToString(<MyComponent />);

        const opt = {
            margin: 1,
            filename: 'my-component.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' },
        };

        html2pdf().set(opt).from(componentHtml).save();
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 900,
                        height: 500,
                    },
                }}
            >
                <Paper elevation={3}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                        }}
                    >
                        <H1>CERTIFIKAT</H1>
                        <img
                            src= {myLogo}
                            alt="Certificate Image"
                            style={{ width: '100px',
                                     height: '100px',
                                borderRadius: '50%',
                                objectFit: 'cover',
                            }}
                        />
                        <H2>Ovaj certifikat dodjeljujemo {profile.firstName} {profile.lastName}, za uspješno položen ispit iz Prve pomoći.</H2>
                        <Button onClick={generatePDF}>Preuzmi</Button>
                    </Box>
                </Paper>
            </Box>
        </Box>
    );
};

export default MyComponent;

