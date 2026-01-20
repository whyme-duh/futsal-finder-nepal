import {useEffect, useState} from 'react';
import {Container, Card, Button, Typography} from '@mui/material';
import axios from 'axios';
import futsalimg from '../assets/futsal.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import './futsal.css';
import groundgreen from '../assets/groundgreen.png';

import { Link } from 'react-router-dom';

function Futsal(){
    const [futsals, setFutsal] = useState([]);

    useEffect(()=>{
        const fetchFutsals = async ()=>{
            try{
                const response = await axios.get("http://127.0.0.1:8000/api/futsals/");
                setFutsal(response.data);

            }catch(error){
                console.log("Error" + JSON.stringify(error.response.data));
            }
        };
        fetchFutsals();
       
    }, [])
    return (
       <>
        <Container >
            <div className="top-rated-futsals">
                <p>Below are the list of futsals in Kathmandu City</p>
                <div className="futsal-list">
                    {futsals.map(futsal => (
                    <div className="futsal-card" key={futsal.id}>
                        <img src={futsalimg} alt="fustal-img" className='futsal-image' />
                        <div className="futsal-info">
                            <h2>{futsal.name}</h2>
                            <h5> <LocationOnIcon sx={{color:'green'}}/> {futsal.location}</h5>
                            <h5> <LocalPhoneOutlinedIcon sx={{color:'green'}}/> 01-4324322</h5>
                            <h5> <img src={groundgreen} alt="futsal-icon" width={'20px'} /> {futsal.no_of_grounds} grounds</h5>
                        </div>
                        <Link to={`/futsals/${futsal.slug}`} style={{textDecoration:'none', color:'black'}}>
                        <button className='detail-btn'>View In Detail</button>
                        </Link>
                    </div>
                    ))}
                </div>
            </div>
        </Container>
       </>
    )
}

export default Futsal;