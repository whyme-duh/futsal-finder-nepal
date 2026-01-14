import {AppBar, Toolbar, Typography, Box, Button} from '@mui/material';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';
import './navbar.css'

function Navbar(){
    return (
        <AppBar position='fixed' sx={{ boxShadow: 'none' }}>
            <Toolbar sx={{backgroundColor:'white', justifyContent:'space-around'}}>
                <img src={logo} alt="logo" width={'200px'}/>
                <Box sx={{display:{xs : 'block' , md: 'flex' }}}>
                    <Button component={Link} to="/" className='nav-buttons' >Home</Button>
                    <Button component={Link} to="/futsals" className='nav-buttons'>Futsals</Button>
                    <Button className='nav-buttons'>Find Player</Button>
                    <Button className='nav-buttons'>About</Button>
                </Box>
            </Toolbar>

        </AppBar>
    );
}

export default Navbar;