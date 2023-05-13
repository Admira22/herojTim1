import Grid from "@mui/material/Grid";
import * as React from "react";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Header from "./Header";
import Info from "./Info";
import Footer from "./Footer";
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import Help from "./Help";


function Blog(){
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body1,
        padding: theme.spacing(2),
        textAlign: 'left',
        color: '#3B3B3B',
        marginLeft:40,
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
    /*const IMG = styled("img")(({theme}) =>({
        backgroundColor: theme.palette.primary,
        ...theme.typography.h6,
        padding: theme.spacing(1),
        marginLeft: 200,
        height:700,
        width:1200
    }));*/
    const IMG = styled("img")(({theme}) =>({
        backgroundColor: theme.palette.primary,
        ...theme.typography.h6,
        padding: theme.spacing(1),
        marginLeft: 35,
        marginRight: 'auto',
        maxWidth: '100%',
        height: 'auto'
    }));
    const { id } = useParams();
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/blogovi/${id}`).then((response) => {
            setBlog(response.data);
        }, (error) => {
            console.log(error);
        })
    }, [id])

    return(
        <React.Fragment>
            <Header/>
            <Info/>
                <Grid container spacing={5}>
                    {
                        blog.map(blogs =>(
                            <Grid item xs={12}>
                                <H1 key={blogs.id}>{blogs.title}</H1>
                            </Grid>
                        ))
                    }
                    {
                        blog.map(blogs =>(
                            <Grid item xs={8}>
                                <H2 key={blogs.id}>{blogs.subtitle1}</H2>
                                <Item key={blogs.id}>{blogs.part1}</Item>
                            </Grid>
                        ))
                    }
                    {
                        blog.map(blogs =>(
                            <Grid item xs={8}>
                                <H2 key={blogs.id}>{blogs.subtitle2}</H2>
                                <Item key={blogs.id}>{blogs.part2}</Item>
                            </Grid>
                        ))
                    }
                    {
                        blog.map(blogs =>(
                            <Grid item xs={8}>
                                <IMG src={blogs.image}></IMG>
                            </Grid>
                        ))
                    }
                    {
                        blog.map(blogs =>(
                            <Grid item xs={8}>
                                <H2 key={blogs.id}>{blogs.subtitle3}</H2>
                                <Item key={blogs.id}>{blogs.part3}</Item>
                            </Grid>
                        ))
                    }
                </Grid>
            <Footer/>
        </React.Fragment>

    )
}
export default Blog;