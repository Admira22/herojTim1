import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Link from "@mui/material/Link";
import axios from "axios";
import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router";
import Header from "./Header";
import Info from "./Info";
import Footer from "./Footer";
import Button from "@mui/material/Button";
import ReactPlayer from 'react-player'
import AuthContext from "../context/AuthContext";
import {useNavigate} from "react-router-dom";


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';



function Lesson1(props){
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body1,
        padding: theme.spacing(1),
        textAlign: 'left',
        color: '#3B3B3B'

    }));
    const H1 = styled("h1")(({theme}) =>({
        backgroundColor: theme.palette.primary,
        ...theme.typography.h2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.secondary.dark
    }));
    const H2 = styled("h1")(({theme}) =>({
        backgroundColor: theme.palette.primary,
        ...theme.typography.h4,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.secondary.main
    }));
    const UL = styled("ul")(({theme}) =>({
        backgroundColor: theme.palette.primary,
        ...theme.typography.h6,
        padding: theme.spacing(10),
        textAlign: 'left',
        color: '#3B3B3B'
    }));
    const url = 'http://127.0.0.1:8000/'

    const [lekcija, setLekcija] = useState([])

    const { id } = useParams()


    async function fetchLesson(){
        const response =  await axios.get(`${url}lekcija/${id}/`)
        console.log(`${url}lekcija/${id}`)
        console.log(response.data)
        setLekcija(response.data[0])
        console.log('HEJ')

    }

    useEffect(()=>{
        fetchLesson()
    },[])

    let { authTokens, logoutUser } = useContext(AuthContext);
    let [profile, setProfile] = useState([]);
    const [disableButton, setDisableButton] = useState(false);
    const navigate = useNavigate();
    let setProgres = async () => {
        const url = 'http://127.0.0.1:8000/';
        try {
            let response = await axios.post(`${url}progres/`, {}, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + String(authTokens.access)
                }
            });
            let data = response.data;
            console.log(data);

            if (response.status === 200) {
                setProfile(data);
            } else if (response.status === 401) {
                logoutUser();
            }
        } catch (error) {
            console.log(error);
        }finally {
            setDisableButton(true);
            console.log('ne radi')
        }
    };

    useEffect(() => {
        //setProgres(); // Call setProgres function here
    }, []);



    return(
        <React.Fragment>
            <Header/>
            <Info/>
        <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <H1 key={lekcija.id}>{lekcija.title}</H1>
                    </Grid>

                    <Grid item xs={6}>
                        <H2>{lekcija.subtitle1}</H2>
                        <Item>{lekcija.part1}</Item>
                    </Grid>

                    <Grid item xs={6}>
                        <H2>{lekcija.subtitle2}</H2>
                        <Item>{lekcija.part2}</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <H2>{lekcija.subtitle3}</H2>
                        <Item>
                            <UL>
                                <li>{lekcija.part3}</li>
                            </UL>
                        </Item>
                    </Grid>
            <Grid item xs={6}>
                <H2>SLIKE</H2>
                <Item style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img
                        src={lekcija.image}
                        alt='slika'
                        height={390}
                        loading="lazy"
                    />
                </Item>
            </Grid>
            <Grid item xs={6}>
                <H2>VIDEO</H2>
                <Item>
                    Ispod se nalazi video, preporučujemo Vam da ga pogledate!
                    <br/>
                    {/*<Link href={lekcija.video} color="#b71c1c">
                        {'Video'}
                    </Link>*/}
                    <ReactPlayer url={lekcija.video} playing controls={true}/>

                </Item>
            </Grid>
            <Grid item xs={6}>
                <H2>PITANJA</H2>
                <Item>
                    Nakon završene prve lekcije u nastavku imate set pitnja koji će Vam pomoći, da se spremite za završni test iz Prve pomoći.
                    <br/>
                    <Link href={`/pitanja/${lekcija.id}`} color="#b71c1c">
                        {'Pitanja'}
                    </Link>
                </Item>
            </Grid>
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'right', alignItems: 'right', marginRight: '10px' }}>
                   <Button variant="contained"
                           onClick={setProgres}
                           disabled={disableButton}
                   >Završena lekcija -></Button>
            </Grid>
        </Grid>
            <Footer/>
        </React.Fragment>
    )
}
export default Lesson1;