import Info from "../Info";
import * as React from "react";
import ListOfLessons from "./ListOfLessons";
import Grid from "@mui/material/Grid";
import Help from "../Help";
import Header from "../Header";
import Footer from "../Footer";

function AllLessons(){
    return(
        <React.Fragment>
            <Header/>
            <Info/>
            <Grid container spacing={5}>
                <Grid item xs={8}>
                    <ListOfLessons/>
                </Grid>
                <Grid item xs={4}>
                    <Help/>
                </Grid>
            </Grid>
            <Footer/>
        </React.Fragment>
    )
}
export default AllLessons;