import React, { useContext, useEffect, useState } from 'react';
import AuthContext from "../../context/AuthContext";
import { renderToString } from 'react-dom/server';
import html2pdf from '../../../node_modules/html2pdf.js/dist/html2pdf';
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import herojLogo from '../../images/herojLogo.png';
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import axios from "axios";


const generatePDF = (profileData) => {
    try {
        const componentHtml = renderToString(<Cerfifikat profile={profileData} />);

        const opt = {
            margin: 0.5,
            filename: 'my-component.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' },
        };

        html2pdf().set(opt).from(componentHtml).save();

    } catch (error) {
        console.log(error);
    }
};

const Cerfifikat = ({ profile }) => {
    const H1 = styled("h1")(({ theme }) => ({
        backgroundColor: theme.palette.primary,
        ...theme.typography.h2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.secondary.dark
    }));
    const H2 = styled("h2")(({ theme }) => ({
        backgroundColor: theme.palette.primary,
        ...theme.typography.h4,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.secondary.main
    }));

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
                            src={herojLogo}
                            alt="Certificate Image"
                            style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%',
                                objectFit: 'cover',
                            }}
                        />
                        <H2>
                            Ovaj certifikat dodjeljujemo {profile.firstName} {profile.lastName}, za uspješno položen ispit iz Prve pomoći.
                        </H2>
                        <Button onClick={() => generatePDF(profile)}>Preuzmi</Button>
                    </Box>
                </Paper>
            </Box>
        </Box>
    );
};


const MyComponent = () => {
    const { authTokens, logoutUser } = useContext(AuthContext);
    const [profile, setProfile] = useState(null);
    useEffect(() => {
        getProfile(); // Call getProfile function here
    }, []);

    const getProfile = async () => {
        const url = 'http://127.0.0.1:8000/';
        try {
            const response = await axios.get(`${url}profile/`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + String(authTokens.access)
                }
            });
            const data = response.data;
            console.log(data);

            if (response.status === 200) {
                setProfile(data);
            } else if (response.status === 401) { // Unauthorized status code
                logoutUser();
            }
        } catch (error) {
            console.log(error);
        }
    };

    if (!profile) {
        return <div>Loading profile...</div>;
    }

    return <Cerfifikat profile={profile} />;
};

export default MyComponent;

