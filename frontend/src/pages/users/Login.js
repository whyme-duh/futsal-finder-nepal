import {Link} from 'react-router-dom';
import signinimg from '../../assets/signin.png';
import './login.css';

export default function LoginPage(){
    return (
        <>
        <div className="container">
            <div className="img-container">
                <img src={signinimg} alt="login-img" className='login-img'/>
            </div>
            <div className="login-form-container">
                <div className="login-form">
                    <h1 className='login-header'>WELCOME BACK </h1>
                    <form action="#" method = "POST">
                        <input type="text" name='username' placeholder='Username'/>
                        <input type="password" name='username' placeholder='Password' />
                        <small>Forgot Password?</small>
                        <button type='submit' className='login-btn'>LOGIN</button>
                    </form>
                    <p>Don't have an account? <Link to='/playersignup' style={{textDecoration:'underline', color:'black'}}><strong>Sign Up!</strong></Link></p>
                </div>
            </div>
        </div>
        </>
    )
}