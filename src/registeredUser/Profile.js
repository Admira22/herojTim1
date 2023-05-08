import Header from "./Header";
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {TableCell} from "@mui/material";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import  Progres from "./Progres";
import Footer from "./Footer";


function kreirajPodatke(podatak1,podatak2){
    return {podatak1,podatak2};
}
const rows = [
    kreirajPodatke("Ime","Sara"),
    kreirajPodatke("Prezime","Jerinić"),
    kreirajPodatke("E-mail","sara54jerinic@gmail.com"),
    kreirajPodatke("Lokalna zajednica","Novo Sarajevo"),
    kreirajPodatke("Dijete",'Ne')
];
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
    return(
        <React.Fragment>
            <Header/>
            <Grid container spacing={3}>
                <Grid item md={8}>
                    <TableContainer>
                        <Table
                            sx={{marginLeft:5,width:"90%"}}
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell align={"center"} style={{backgroundColor:"#931621",color:"white"}} colSpan={2}>
                                        <Typography fontSize={18} fontWeight={"bold"}>
                                            PODACI O KORISNIKU
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody
                                sx={{backgroundColor:"whitesmoke"}}
                            >
                                {rows.map((row) => (
                                    <TableRow key={row.podatak1}>
                                        <TableCell component="th" scope="row" align={"right"}>
                                            <Typography fontWeight={"bold"} fontSize={18}>
                                                {row.podatak1}
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="left">
                                            <Typography fontSize={18}>
                                                {row.podatak2}
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                  {/*  <Button variant="contained" color="success" size={"large"}
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
                        <Progres progress={60} />
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