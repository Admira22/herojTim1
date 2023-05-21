import React from 'react';
import { Box, FormControl, FormControlLabel, Paper, Radio, RadioGroup, Button } from '@mui/material';
import Grid from "@mui/material/Grid";

export default function Test1() {
    const handleSubmit = (event) => {
        event.preventDefault();
        //logika
    };

    return (
        <Grid container justifyContent="center" marginTop={4}>
            <Grid item md={6} lg={8}>
               <Box marginTop={4} display="flex" justifyContent="flex-start">
                    <Paper elevation={3} sx={{ width: '100%' }}>
                        <form onSubmit={handleSubmit}>
                            <Box p={2} sx={{ bgcolor: '#931621', color: 'white' }}>
                                <FormControl component="fieldset">
                                    <legend>ZAVRŠNI TEST</legend>
                                </FormControl>
                            </Box>
                            <Box p={2} sx={{ bgcolor: 'whitesmoke', textAlign:"left"}}>
                                <Box>
                                    <FormControl component="fieldset">
                                        <legend style={{ color: '#931621' }}>Šta je prva pomoć?</legend>
                                        <RadioGroup>
                                            <FormControlLabel value="option1" control={<Radio />} label="Odgovor 1" />
                                            <FormControlLabel value="option2" control={<Radio />} label="Odgovor 2" />
                                            <FormControlLabel value="option3" control={<Radio />} label="Odgovor 3" />
                                        </RadioGroup>
                                    </FormControl>
                                </Box>
                            </Box>
                            <Box p={2} sx={{ bgcolor: 'whitesmoke', textAlign:"left"}}>
                                <FormControl component="fieldset">
                                    <legend style={{ color: '#931621' }}>Šta je prva pomoć?</legend>
                                    <RadioGroup>
                                        <FormControlLabel value="option1" control={<Radio />} label="Odgovor 1" />
                                        <FormControlLabel value="option2" control={<Radio />} label="Odgovor 2" />
                                        <FormControlLabel value="option3" control={<Radio />} label="Odgovor 3" />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                            <Box sx={{ bgcolor: 'whitesmoke'}}>
                                <Button type="submit" variant="contained" color="success"
                                sx={{marginBottom:3,fontSize:20}}>
                                    POŠALJI
                                </Button>
                            </Box>

                        </form>
                    </Paper>
                </Box>
            </Grid>
        </Grid>

    );
};
