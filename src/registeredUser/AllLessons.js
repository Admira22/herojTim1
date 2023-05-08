import Header from "./Header";
import Info from "./Info";
import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import List from "@mui/material/List";
import ListOfLessons from "./ListOfLessons";
import Grid from "@mui/material/Grid";
import Help from "./Help";

function AllLessons(){
    const titles = ["Logo","Lekcije", "Profil", "Blog", "Završni test" ,"ODJAVI SE"];
    return(
        <React.Fragment>
            <Toolbar  component="nav" variant="regular" sx={{justifyContent: 'space-between', overflowX: 'auto',backgroundColor: '#931621' }} >

                {titles.map((titles) =>(
                    //     <Button className={"titles"}>{titles}</Button>
                    <Link color="#ffebee"
                          noWrap
                        // key={title}
                          variant="body1"
                        // href = {'/blog'}
                          href={titles}
                          sx={{ p: 1, flexShrink: 0}}> {titles} </Link>
                ))}
                <IconButton>
                    <SearchIcon  color="primary"
                                 fontSize="large"
                                 onClick={() => console.log('Clicked search icon!')}
                                 className="my-search-icon"
                                 style={{ marginRight: '10px' }}/> <input type="text" placeholder="Pretraži..." />
                </IconButton>
            </Toolbar>
            <Info/>
            <Grid container spacing={5}>
                <Grid item xs={8}>
                    <ListOfLessons/>
                </Grid>
                <Grid item xs={4}>
                    <Help/>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
export default AllLessons;