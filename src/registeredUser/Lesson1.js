import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Images from '../registeredUser/Images';
import Link from "@mui/material/Link";
import axios from "axios";
import {useEffect, useState} from "react";


function Lesson1(){
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

    const [lesson, setLessons] = useState([])
    async function fetchLesson(){
       const response =  await axios.get(`${url}Lekcija1`)
        console.log(response.data)
        setLessons(response.data)
    }

    useEffect(()=>{
        fetchLesson()
    },[])

    return(
        <Grid container spacing={5}>
            {
                lesson.map(lesson =>(
                    <Grid item xs={12}>
                        <H1 key={lesson.id}>{lesson.title}</H1>
                    </Grid>
                ))
            }
            {
                lesson.map(lesson =>(
                    <Grid item xs={6}>
                        <H2>podnaslov1</H2>
                        <Item>{lesson.part1}</Item>
                    </Grid>
                ))
            }
            {
                lesson.map(lesson =>(
                    <Grid item xs={6}>
                        <H2>podnaslov2</H2>
                        <Item>{lesson.part2}</Item>
                    </Grid>
                ))
            }
            {
                lesson.map(lesson =>(
                    <Grid item xs={6}>
                        <H2>podnaslov3</H2>
                        <Item>
                            <UL>
                                <li>{lesson.part3}</li>
                            </UL>
                        </Item>
                    </Grid>
                ))
            }
            <Grid item xs={6}>
                <H2>SLIKE</H2>
                <Item>
                    <Images/>
                </Item>
            </Grid>
            <Grid item xs={6}>
                <H2>VIDEO</H2>
                <Item>
                    Na sljedećem linku nalazi se video, vezan za prvu lekciju o prvoj pomoći.
                    Preporučujemo Vam da pogledate.
                    <br/>
                    <Link href="https://www.youtube.com/watch?v=jfkv9v-qDYE" color="#b71c1c">
                        {'Video'}
                    </Link>
                </Item>
            </Grid>
            <Grid item xs={6}>
                <H2>PITANJA</H2>
                <Item>
                    Nakon završene prve lekcije u nastavku imate set pitnja koji će Vam pomoći, da se spremite za završni test iz Prve pomoći.
                    <br/>
                    <Link href="neki_link" color="#b71c1c">
                        {'Pitanja'}
                    </Link>
                </Item>
            </Grid>
        </Grid>
    )
}
export default Lesson1;