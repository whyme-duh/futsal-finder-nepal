import {Container, FormControl, Input, InputLabel} from '@mui/material';
import signinimg from '../assets/signin.png';
import './login.css';

export function LoginPage(){
    return (
        <>
        <div className="container">
            <div className="img-container">
                <img src={signinimg} alt="login-img" className='login-img'/>
            </div>
            <div className="login-form-container">
                <div className="login-form">
                    <h1>WELCOME BACK </h1>
                    <form action="#" method = "POST">
                        <input type="text" name='username' placeholder='Username'/>
                        <input type="password" name='username' placeholder='Password' />
                        <small>Forget Password?</small>
                        <button type='submit' className='login-btn'>LOGIN</button>
                    </form>
                    <p>Don't have an account? <strong>Sign Up!</strong></p>
                </div>
            </div>
        </div>
        </>
    )
}