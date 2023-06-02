import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Footer from "../registeredUser/Footer";
import { InputLabel, MenuItem, Select, Switch} from "@mui/material";
import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";


export default function SignUp() {
    /*const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    const [lc, setLc] = React.useState('');

    const handleChange = (event) => {
        setLc(event.target.value);

    };*/
    const navigate = useNavigate();
    const url = 'http://127.0.0.1:8000/'
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${url}token/register/`, {
                username,
                email,
                password,
                firstName,
                lastName
            });
            console.log(response.data); // Handle the response as needed
            navigate(`../login`, { replace: true })
        } catch (error) {
            console.error(error);
        }
    };


    return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'primary.dark' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Registruj se
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    type="text"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    type="text"
                                    placeholder="Ime"
                                    value={firstName}
                                    onChange={(e) => setfirstName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    type="text"
                                    placeholder="Prezime"
                                    value={lastName}
                                    onChange={(e) => setlastName(e.target.value)}
                                />
                            </Grid>
                           {/* <Grid item xs={12} sm={12}>
                                <InputLabel id="demo-simple-select-label">Lokalna zajednica</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={lc}
                                    label="Lokalna zajednica"
                                    onChange={handleChange}
                                    style={{ width: '400px' }}
                                >
                                    <MenuItem value={10}>Stari grad</MenuItem>
                                    <MenuItem value={20}>Centar</MenuItem>
                                    <MenuItem value={30}>Novi grad</MenuItem>
                                    <MenuItem value={30}>Novo Srajevo</MenuItem>
                                    <MenuItem value={30}>Ilidža</MenuItem>
                                </Select>
                            </Grid>*/}
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, backgroundColor: 'primary.dark', colorcolor: '#fff'}}
                        >
                            Registruj se
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Već imate korisnički račun?
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Footer/>
            </Container>
    );
}