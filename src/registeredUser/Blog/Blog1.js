import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from "axios";
import {useState, useEffect} from "react";
import {styled} from "@mui/material/styles";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),

}));
export default function Blogovi() {
    const [blogs, setBlogs] = useState([]);
    const [expanded, setExpanded] = useState(-1);


    useEffect(() => {
        axios.get("http://127.0.0.1:8000/blogovi/").then((response) => {
            setBlogs(response.data);
        }, (error) => {
            console.log(error);
        })
    }, [])

    const handleExpandClick = (index) => {
        setExpanded(expanded === index ? -1 : index);
    };

    return (
        <>
            {blogs.map((blog, index) => (
                <Card sx={{ maxWidth: 1000, marginLeft: 10, marginBottom:5}} key={index}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                A
                            </Avatar>
                        }
                        title={<strong>{blog.title}</strong>}
                    />
                    {blog.image && (
                        <CardMedia
                            component="img"
                            height="300"
                            image={blog.image}
                            alt="image"
                        />
                    )}
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {blog.sadrzaj.substring(0, 100)}...
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <ExpandMore
                            expand={expanded !== -1}
                            onClick={() => handleExpandClick(index)}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>{blog.sadrzaj}</Typography>
                            <Link href={`/Blog/${blog.id}`}>
                                <Button>PROČITAJ VIŠE</Button>
                            </Link>
                        </CardContent>
                    </Collapse>
                </Card>
            ))}
        </>
    );
}
