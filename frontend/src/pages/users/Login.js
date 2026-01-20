import {Link, useNavigate} from 'react-router-dom';
import React, {useState, useContext} from 'react';
import { AuthContext } from '../../context/AuthContext';
import signinimg from '../../assets/signin.png';
import {toast} from 'react-toastify';
import './login.css';

export default function LoginPage(){
    const {login} = useContext(AuthContext);

    const [id, setId] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            await login(id, password);
            toast.success("Logged in succesfully!");
            navigate('/profile');
        }
        catch(error){
            toast.error("Error occured. Try again later!");

            console.log("ERROR OCCURED: ", JSON.stringify(error.response.data));
        }
    }

    return (
        <>
        <div className="container">
            <div className="img-container">
                <img src={signinimg} alt="login-img" className='login-img'/>
            </div>
            <div className="login-form-container">
                <div className="login-form">
                    <h1 className='login-header'>WELCOME BACK </h1>
                    <form onSubmit={handleLogin} method = "POST">
                        <input type="text" name='username' placeholder='Username' onChange={
                            (e) =>setId(e.target.value)
                        }/>
                        <input type="password" name='username' placeholder='Password' onChange={
                            (e) => setPassword(e.target.value) 
                        }/>
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