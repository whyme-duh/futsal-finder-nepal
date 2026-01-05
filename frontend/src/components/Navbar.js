import React from 'react-dom';
import {AppBar, Toolbar, Typography, Box, Button} from '@mui/material';
import {Link} from 'react-router-dom';

function Navbar(){
    return (
        <AppBar position='fixed'>
            <Toolbar sx={{backgroundColor:'white', justifyContent:'space-between'}}>
                <Typography variant='h5' sx= {{color:'black', fontFamily:'monospace'}}>
                    Futsal Finder
                </Typography>
                <Box sx={{display:{xs : 'block' , md: 'flex' }}}>
                    <Button component={Link} to="/">Home</Button>
                    <Button component={Link} to="/futsals">Futsals</Button>
                    <Button>Find Player</Button>
                    <Button>About</Button>
                </Box>
            </Toolbar>

        </AppBar>
    );
}

export default Navbar;