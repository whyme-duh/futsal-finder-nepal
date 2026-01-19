import {Link} from 'react-router-dom';
import signinimg from '../../assets/signin.png';
import './login.css';

export default function SignUp(){
    return (
        <>
        <div className="container">
            <div className="img-container">
                <img src={signinimg} alt="login-img" className='login-img'/>
            </div>
            <div className="login-form-container">
                <div className="login-form">
                    <h1 className='login-header'>HELLO NEW USER </h1>
                    <form action="#" method = "POST">
                        <input type="text" name='username' placeholder='Username'/>
                        <input type="email" name='email' placeholder='Email'/>
                        <input type="password" name='password1' placeholder='Enter Password' />
                        <input type="password" name='password2' placeholder='Enter Password Again' />
                        <small className="terms-and-condition">
                            <input type="checkbox" name="agreement" /> 
                            <label htmlFor="agreement">Agree Terms and Condition</label>
                        </small>
                        <button type='submit' className='login-btn'>REGISTER</button>
                    </form>
                    <p>Already have an account? <Link to='/playerlogin' style={{textDecoration:'underline', color:'black'}}><strong>Login Now!</strong></Link></p>
                </div>
            </div>
        </div>
        </>
    )
}