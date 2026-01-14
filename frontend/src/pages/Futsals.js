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
        <Container sx={{marginTop:'6em'}}>
       <Typography variant='p'>Below are the list of futsals you can find in Kathmandu: </Typography>
        {futsals.map(futsal =>(
            <Card sx={{width:'30%', marginTop:'2em'}}>
                <img src={futsalimg} alt="fustal-img" className='futsal-img-card'/>
                <Typography variant='h5'>
                    {futsal.name}
                </Typography>
                <Typography align='left' paddingInline={'1em'} paddingTop={'1em'}>
                    Location: {futsal.location}
                </Typography>
                <Typography align='left' paddingInline={'1em'} paddingTop={'1em'}>
                    Number of futsal grounds: {futsal.no_of_grounds} grounds
                </Typography>
            </Card>
        ))}
        </Container>
       </>
    )
}

export default Futsal;