import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import image1 from '../images/image1.png';

function Info(props) {
    const Info = {
        title: 'HEROJ',
        description:
            "Dobro došli na web stranicu za Prvu pomoć." +
            "Ovdje ćete imati priliku naučiti osnove prve pomoći, testirati svoje znanje." +
            "Pored toga imate mogućnost čitanja blogova koje pišu stručnjaci, te dobijanja informacija koje se tiču Vaše lokalne zajednice, " +
            "a tiču se Prve pomoći i Crvenog križa." ,
        image: image1,
        //image: 'https://media.istockphoto.com/id/165632100/vector/medical-frame.jpg?s=612x612&w=0&k=20&c=1KBd83_uXpqzlIgEQ9f5Jis6-CA0aZ0fvKmUfykFzYA=',
        imageText: 'main image description',
        //linkText: 'Nastavite čitati…',
    };
    return (
        <Paper
            sx={{
                position: 'relative',
                backgroundColor: 'grey.800',
                color: '#fff',
                mb: 4,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${Info.image})`,
            }}
        >
            {<img style={{ display: 'none' }} src={Info.image} alt={Info.imageText} />}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    backgroundColor: 'rgba(0,0,0,.3)',
                }}
            />
            <Grid container>
                <Grid item md={6}>
                    <Box
                        sx={{
                            position: 'relative',
                            p: { xs: 3, md: 6 },
                            pr: { md: 0 },
                        }}
                    >
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            {Info.title}
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            {Info.description}
                        </Typography>
                        <Link variant="subtitle1" href="#">
                            {Info.linkText}
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
}

Info.propTypes = {
    post: PropTypes.shape({
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        imageText: PropTypes.string.isRequired,
        linkText: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
};

export default Info;
