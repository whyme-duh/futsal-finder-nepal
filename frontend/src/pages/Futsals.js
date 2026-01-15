import {useEffect, useState} from 'react';
import {Container, Card, Button, Typography} from '@mui/material';
import axios from 'axios';
import futsalimg from '../assets/futsal.png';
import './futsal.css';

function Futsal(){
    const [futsals, setFutsal] = useState([]);

    useEffect(()=>{
        const fetchFutsals = async ()=>{
            try{
                const response = await axios.get("http://127.0.0.1:8000/api/futsals/");
                setFutsal(response.data);

            }catch(error){
                console.log("Error" + error);
            }
        };
        fetchFutsals();
       
    }, [])
    return (
       <>
        <Container sx ={{marginTop:'8em'}}>
            <div className="top-rated-futsals">
                <p>Below are the list of futsals in Kathmandu City</p>
                {futsals.map(futsal => (
                <div className="futsal-card">
                    <img src={futsalimg} alt="fustal-img" className='futsal-image' />
                    <h2>{futsal.name}</h2>
                    <div className="futsal-info">
                        <h5> <strong>Location</strong>: {futsal.location}</h5>
                        <h5> <strong>Number</strong>: 01-4324322</h5>
                        <h5> <strong>Number of Grounds</strong>: {futsal.no_of_grounds} grounds</h5>
                    </div>
                </div>
                ))}
            </div>
        </Container>
       </>
    )
}

export default Futsal;