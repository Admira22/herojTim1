import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router";
import * as React from "react";
import {styled} from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";


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

export default function QA(){
    const url = 'http://127.0.0.1:8000/'
    const [pitanja, setPitanja] = useState([])
    const [odgovori,setOdgovor] =useState([])
    const [expanded, setExpanded] = useState(-1);

    const handleExpandClick = (index) => {
        setExpanded(expanded === index ? -1 : index);
    };
    const { id } = useParams()


    async function fetchQuestions(){
        const response =  await axios.get(`${url}pitanja/${id}/`)
        console.log(response.data)
        setPitanja(response.data)
    }
    async function fetchAnswers(pitanjeID){
        const response =  await axios.get(`${url}odgovor/${pitanjeID}`)
        //console.log(pitanjeID)
        //console.log(`${url}odgovor/${pitanjeID}`)
        //console.log(response.data)
        setOdgovor(response.data)
    }
    useEffect(() => {
        fetchQuestions()
    }, [])

    useEffect(() => {
        if (expanded !== -1 && pitanja[expanded]) {
            fetchAnswers(pitanja[expanded].id);
        }
    }, [expanded, pitanja]);
    return (
       <>
           {pitanja.map((pitanje, index) => (
               <Card sx={{ maxWidth: 1000, marginLeft: 10, marginBottom:5}} key={index}>
                            <CardHeader
                                sx={{bgcolor:"#931621",color:"white"}}
                                title={<strong>{pitanje.tekst}</strong>}
                                />
                        <CardActions disableSpacing>
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
                                    {expanded === index && odgovori.length > 0 && (
                                        <div>
                                            {odgovori.map((odgovor, odgovorIndex) => (
                                                <div key={odgovorIndex}>
                                                    <Typography variant="h6" color="text.primary">
                                                        {odgovor.tekst}
                                                    </Typography>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </CardContent>
                            </Collapse>
                        </Card>
            ))}
        </>
    );
}
