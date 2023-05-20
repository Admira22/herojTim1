import * as React from 'react';
import { styled } from '@mui/material/styles';
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
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useEffect, useState} from "react";
import axios from "axios";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function News() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = (index) => {
        setExpanded(expanded === index ? -1 : index);
    };

    const url = 'http://127.0.0.1:8000/';
    const [obavjesti, setObavjesti] = useState([]);

    async function fetchNews() {
        const response = await axios.get(`${url}obavjest/`);
        console.log(response.data);
        setObavjesti(response.data);
    }

    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <>
            {obavjesti.map((obavjesti,index) => (
                <Card key={obavjesti.id} sx={{ maxWidth: 1000, marginLeft: 10, marginBottom:5}}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                A
                            </Avatar>
                    }
                        action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={obavjesti.title}
                    //subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={obavjesti.image}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {obavjesti.description}
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
                        expand={expanded}
                        onClick={() => handleExpandClick(index)}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Detalji:</Typography>
                        <Typography paragraph>
                            {obavjesti.text}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
                ))}
        </>
    );
}

