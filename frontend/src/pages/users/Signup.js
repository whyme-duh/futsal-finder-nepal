import {Link} from 'react-router-dom';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import signinimg from '../../assets/signin.png';
import axios from 'axios';
import './login.css';

export default function SignUp(){

    const [formData, setFormData] = useState({
        username: '',
        email:'',
        password1: '',
        password2: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name] : e.target.value});
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            await axios.post("http://127.0.0.1:8000/api/register/", formData);
            alert("Registration succesful! Now please login");
            navigate('/playerlogin');
        }
        catch(e){
            console.error("Error occure: ", JSON.stringify(e.response.data));
        }
    };

    return (
        <>
        <div className="container">
            <div className="img-container">
                <img src={signinimg} alt="login-img" className='login-img'/>
            </div>
            <div className="login-form-container">
                <div className="login-form">
                    <h1 className='login-header'>HELLO NEW USER </h1>
                    <form method = "POST" onSubmit={handleSubmit}>
                        <input type="text" name='username' placeholder='Username' onChange={handleChange}/>
                        <input type="email" name='email' placeholder='Email' onChange={handleChange}/>
                        <input type="password" name='password1' placeholder='Enter Password' onChange={handleChange}/>
                        <input type="password" name='password2' placeholder='Enter Password Again' onChange={handleChange}/>
                        <small className="terms-and-condition">
                            <input type="checkbox" name="agreement" /> 
                            <label htmlFor="agreement">Terms and Condition</label>
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