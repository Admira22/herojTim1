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


export default function SignUp() {
    const handleSubmit = (event) => {
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
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="Ime"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Prezime"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email adresa"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Lozinka"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
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
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <FormControlLabel required control={<Switch />} label="Da li imate dijete?" />
                            </Grid>
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
                                <Link href="/signIn" variant="body2">
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