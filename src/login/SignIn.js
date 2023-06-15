import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Footer from "../registeredUser/Footer";
import {useContext} from "react";
import AuthContext from "../context/AuthContext";


export default function SignIn() {
    let {loginUser} = useContext(AuthContext)
  /*  const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };*/

    return (
        /*<div>
            <form onSubmit={loginUser}>
                <input type="text" name="username" placeholder="unesite username"/>
                <input type="password" name="password" placeholder="unesite lozinku"/>
                <input type="submit"/>
            </form>
        </div>*/
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
                        Prijavi se
                    </Typography>
                    <Box component="form" onSubmit={loginUser} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Korisnicko ime"
                            name="username"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Lozinka"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, backgroundColor: 'primary.dark', colorcolor: '#fff' }}
                        >
                            Prijavi se
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="/signUp" variant="body2">
                                    {"Nemate korisnički račun?"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Footer/>
            </Container>
    );
}