import { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export function Profile(){
    const navigate = useNavigate();
    const [profile, setProfile] = useState("");
    const handleLogout =()=> {

        localStorage.removeItem('access');
        navigate('/playerlogin');
    }

    useEffect(()=>{
        const fetchProfile = async ()=>{
            try{
                const token = localStorage.getItem('access');
                const response = await axios.get("http://localhost:8000/profile/",{
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                });
                setProfile(response.data)
            }catch (error){
                console.log("Errr: " , JSON.stringify(error.response.data));
            }
        }
        fetchProfile();
    }, []);

    return(
        <>
        <h1>Profile Page</h1>
        {profile.username}
        {profile.email}
        <button onClick={handleLogout}>Logout</button>
        </>
    )
}