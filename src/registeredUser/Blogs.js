import * as React from "react";
import Info from "./Info";
import Grid from "@mui/material/Grid";
import News from "./News";
import Blog1 from "./Blog1";
import Help from "./Help";
import Footer from "./Footer";
import Header from "./Header";

function Blogs() {
    return (
        <React.Fragment>
            <Header/>
            <Info/>
            <Grid container spacing={5}>
                    <Grid item xs={8}>
                        <Blog1/>
                    </Grid>
                <Grid item xs={4}>
                    <Help/>
                </Grid>
            </Grid>
            <Footer/>
        </React.Fragment>
    )
}
export default Blogs;