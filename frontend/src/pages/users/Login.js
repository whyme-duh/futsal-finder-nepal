import {Link, useNavigate} from 'react-router-dom';
import React, {useState} from 'react';
import axios from 'axios';
import signinimg from '../../assets/signin.png';
import './login.css';

export default function LoginPage(){

    const [id, setId] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post("http://127.0.0.1:8000/api/login/",{
                username:id,
                password: password
            });
            localStorage.setItem("acces", response.data.access);
            alert("Logged In Succesfully!");
            navigate('/profile');
        }
        catch(error){
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