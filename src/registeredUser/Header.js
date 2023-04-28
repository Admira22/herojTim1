import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Link from '@mui/material/Link';
import Info from "./Info";
import Footer from "./Footer";


function Header(props) {
    //const { sections, title } = props;
    const titles = ["Logo","Lekcije", "Moj profil", "Blog", "Završni test" ,"ODJAVI SE"];

    return (
        <React.Fragment>
            {/*<Toolbar sx={{ borderBottom: 1, borderColor: 'divider'}}>*/}
            {/*    <Button size="small">Logo</Button>*/}
            {/*    <Typography*/}
            {/*        component="h2"*/}
            {/*        variant="h5"*/}
            {/*        color="red"*/}
            {/*        align="center"*/}
            {/*        noWrap*/}
            {/*        sx={{ flex: 1 }}*/}
            {/*    >*/}
            {/*        {"H E R O J"}*/}
            {/*    </Typography>*/}
            {/*    <IconButton>*/}
            {/*        <SearchIcon  color="primary"*/}
            {/*                     fontSize="large"*/}
            {/*                     onClick={() => console.log('Clicked search icon!')}*/}
            {/*                     className="my-search-icon"*/}
            {/*                     style={{ marginRight: '10px' }}/> <input type="text" placeholder="Pretraži" />*/}
            {/*    </IconButton>*/}
            {/*    /!*<Button variant="outlined" size="small">*!/*/}
            {/*    /!*    Odjavi se*!/*/}
            {/*    /!*</Button>*!/*/}
            {/*</Toolbar>*/}
            <Toolbar  component="nav" variant="regular" sx={{justifyContent: 'space-between', overflowX: 'auto',backgroundColor: '#931621' }} >

                {titles.map((titles) =>(
                //     <Button className={"titles"}>{titles}</Button>
                    <Link color="#ffebee"
                          noWrap
                       // key={title}
                        variant="body1"
                        href={titles.url}
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
            <Footer/>
        </React.Fragment>
    );
}

// Header.propTypes = {
//     sections: PropTypes.arrayOf(
//         PropTypes.shape({
//             title: PropTypes.string.isRequired,
//             url: PropTypes.string.isRequired,
//         }),
//     ).isRequired,
//     title: PropTypes.string.isRequired,
// };

export default Header;