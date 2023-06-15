import React, {useContext, useEffect, useRef, useState} from 'react';
import { Box, FormControl, FormControlLabel, Paper, Radio, RadioGroup, Button } from '@mui/material';
import Grid from "@mui/material/Grid";
import axios from "axios";
import _ from 'lodash';
import Typography from "@mui/material/Typography";
import AuthContext from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";

export default function Test1() {
    const url = 'http://127.0.0.1:8000/'
    const navigate = useNavigate();
    const [pitanja, setPitanja] = useState([])
    const [brojTacnihOdgovora, setBrojTacnihOdgovora] = useState(0);
    const [tacniOdgovori, setTacniOdgovori] = useState([]);
    const [testResult, setTestResult] = useState(null);
    const [testSubmitted, setTestSubmitted] = useState(false);
    const formRef = useRef(null);

    async function fetchQuestions(){
        const pitanjaResponse = await axios.get(`${url}pitanja/`);
        const odgovoriResponse = await axios.get(`${url}odgovori/`);

        const pitanja=_.shuffle(pitanjaResponse.data);
        const odgovori=odgovoriResponse.data;

        const pitanjaZaFront=pitanja.map((pi)=> {
            const pitanjeOdgovori = odgovori.filter((odgovor) =>odgovor.pitanje.id2 === pi.id)
            const tacanOdgovor=_.sample(pitanjeOdgovori);
            const netacniOdgovori = _.without(odgovori, tacanOdgovor);
            const netacanOdgovor1 = _.sample(netacniOdgovori);
            const netacanOdgovor2 = _.sample(_.without(netacniOdgovori, netacanOdgovor1))
            const odgovoriZaPitanje = _.shuffle([tacanOdgovor, netacanOdgovor1,netacanOdgovor2]);
            return {
                id:pi.id,
                tekst:pi.tekst,
                odgovori:odgovoriZaPitanje,
                tacni: tacanOdgovor,
            };
        });
        setTacniOdgovori(pitanjaZaFront.map((pitanje) => {
            const tacanOdgovor = pitanje.tacni;
            return {
                pitanjeId: pitanje.id,
                tacanOdgovor: tacanOdgovor
            };
        }));
        setPitanja(pitanjaZaFront.slice(0, 8));
    }

    useEffect(()=>{
        fetchQuestions()
    },[])

    useEffect(() => {
    }, [brojTacnihOdgovora]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        let brojTacnih = 0;
        const data = new FormData(formRef.current)

        pitanja.forEach((pitanje) => {
            const selektovaniOdgovor = data.get(`odgovor_${pitanje.id}`);
            const tacanOdgovor=pitanje.tacni;

            if (tacanOdgovor.pitanje.id2.toString() === selektovaniOdgovor) {
                brojTacnih++;
            }

        });
        setBrojTacnihOdgovora(brojTacnih);

        axios
            .post(`${url}posaljiRezultate/`, {
                brojTacnih: brojTacnih,
                user_id: profile.id,
            })
            /*.then((response) => {
                if (response.data.redirect) {
                    navigate(response.data.redirect);
                }
            })*/
            .then((response) => {
                if (response.data.redirect) {
                    if (brojTacnihOdgovora === 7 || brojTacnihOdgovora === 8) {
                        navigate('/certifikat');
                    } else {
                        setTestResult(brojTacnihOdgovora);
                        setTestSubmitted(true);
                    }
                }
            })
            .catch((error) => {
            });

    };

    let {authTokens, logoutUser} = useContext(AuthContext)
    let [profile, setProfile] = useState([])


    let getNotes = async() =>{
        let response = await fetch(`${url}profile/`, {
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + String(authTokens.access)
            }
        })
        let data = await response.json()
        //console.log(data)

        if(response.status === 200){
            setProfile(data)
        }else if(response.statusText === 'Unauthorized'){
            logoutUser()
        }

    }
    useEffect(()=> {
        getNotes()
    }, [])



    return (
        <Grid container justifyContent="center" marginTop={4}>
            <Grid item md={6} lg={8}>
                {testSubmitted && (
                    <Box sx={{ marginTop: 4 }}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="h6" color="error" align="center">
                                ŽAO NAM JE NISTE POLOŽILI TEST, POKUŠAJTE PONOVO!
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => {
                                        setTestSubmitted(false);
                                        fetchQuestions();
                                    }}
                                >
                                    PONOVO
                                </Button>
                            </Box>
                        </Paper>
                    </Box>
                )}
                {!testSubmitted && (
                    <Box marginTop={4} display="flex" justifyContent="flex-start">
                        <Paper elevation={3} sx={{ width: '100%' }}>
                            <form ref={formRef} onSubmit={handleSubmit} method={"POST"} action={`${url}posaljiRezultate/`} encType="multipart/form-data">
                                <Box p={2} sx={{ bgcolor: '#931621', color: 'white' }}>
                                    <FormControl component="fieldset">
                                        <legend>ZAVRŠNI TEST</legend>
                                    </FormControl>
                                </Box>
                                <Box p={2} sx={{ bgcolor: 'whitesmoke', textAlign: "left",color:"black"}}>
                                    {pitanja.map((pitanje, index) => (
                                        <FormControl component="fieldset" key={index}>
                                            <legend style={{ color: '#931621' }}>{pitanje.tekst}</legend>
                                            <RadioGroup>
                                                {pitanje.odgovori.map((odgovor, odgovorIndex) => (
                                                    <FormControlLabel
                                                        key={odgovorIndex}
                                                        value={odgovor.pitanje.id2}
                                                        control={<Radio/>}
                                                        label={odgovor.tekst}
                                                        name={`odgovor_${pitanje.id}`}
                                                    />
                                                ))}
                                            </RadioGroup>

                                        </FormControl>
                                    ))}
                                </Box>
                                <Box sx={{ bgcolor: 'whitesmoke'}}>
                                    {/*<Typography>
                                    Broj tačnih odgovora: {brojTacnihOdgovora}
                                </Typography>*/}
                                    <input type="hidden" name="user_id" value={profile.id} />
                                    <Button type="submit" variant="contained" color="success" onSubmit={handleSubmit}
                                            sx={{marginBottom:3,fontSize:20,alignSelf:'center'}}>
                                        POŠALJI
                                    </Button>
                                </Box>
                            </form>
                        </Paper>
                    </Box>
                )}
            </Grid>
        </Grid>
    );
};
