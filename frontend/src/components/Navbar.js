import {AppBar, Toolbar, Typography, Box, Button} from '@mui/material';
import {Link, useNavigate} from 'react-router-dom';
import {PublicRoute, ProtectedRoute} from './AuthGaurds';
import logo from '../assets/logo.png';
import './navbar.css'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function CustomerStyledButton(props){
    if ( props.link == "handleLogout"){
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
            onClick={props.function}
            >
                {props.text}
            </Button>
        )
    }
    else{
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
    
}

function Navbar(){

    const {user, logout} = useContext(AuthContext);
    const navigate = useNavigate();
    console.log(user);

    const handleLogout = () =>{
        logout();
        navigate('/playerlogin');
    };


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
                    {user ? (
                        <>
                        <CustomerStyledButton text="Profile" link ="/profile"/>
                        <CustomerStyledButton text="Logout" link ="handleLogout" function={handleLogout}/>
                        </>
                    ) : (
                        <>
                        <CustomerStyledButton text="Player Login" link ="/playerlogin"/>
                        </>
                        )
                    }
                </Box>
            </Toolbar>

        </AppBar>
    );
}

export default Navbar;