import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Link from '@mui/material/Link';

function Header() {
    const titles = ["Logo","Lekcije", "Profil", "Blog", "Završni test" ,"ODJAVI SE"];

    return (
        <React.Fragment>
            <Toolbar  component="nav" variant="regular" sx={{justifyContent: 'space-between', overflowX: 'auto',backgroundColor: '#931621' }} >
                {titles.map((titles) =>(
                    <Link color="#ffebee"
                          noWrap
                        // key={title}
                          variant="body1"
                        // href = {'/blog'}
                          //href={titles}
                          href={`/${titles}`}
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
        </React.Fragment>
    );
}

export default Header;