import {AppBar, Toolbar, Typography, Box, Button} from '@mui/material';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';
import './navbar.css'

function CustomerStyledButton(props){
    return (
        <Button 
        disableRipple
        sx={{
            fontSize:'1.5em',
            color:'black',
            fontFamily:'monospace',
            paddingInline:'1em',
            ":hover":{
                borderBottom:'1px solid black'
            }
        }}
        component={Link}
        to={props.link}
        >
            {props.text}
        </Button>
    )
}

function Navbar(){
    return (
        <AppBar sx={{ boxShadow: 'none' }} position='relative'>
            <Toolbar sx={{backgroundColor:'white', justifyContent:'space-around'}}>
                <Button component={Link} to ='/' disableRipple sx={{":hover":{
                    backgroundColor:'transparent'
                }}}>
                <img src={logo} alt="logo" width={'200px'}/>

                </Button>
                <Box sx={{display:{xs : 'block' , md: 'flex' }}}>
                    <CustomerStyledButton text="Futsals" link ="/futsals"/>
                    <CustomerStyledButton text="About" link ="/aboutus"/>
                    <CustomerStyledButton text="Find Player" link ="/findplayer"/>
                    <CustomerStyledButton text="Player Login" link ="/playerlogin"/>

                </Box>
            </Toolbar>

        </AppBar>
    );
}

export default Navbar;