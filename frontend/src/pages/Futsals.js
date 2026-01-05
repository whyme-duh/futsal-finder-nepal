import {useEffect, useState} from 'react';
import {Card, Button, Typography} from '@mui/material';
import axios from 'axios';

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
        <h1> This is a Futsal page</h1>
        <p>Where have you been?</p>
        {futsals.map(futsal =>(
            <Card sx={{width:'fit-content'}}>
                    <Typography variant='h3'>
                        {futsal.name}
                    </Typography>
                    <Typography>
                        {futsal.location}
                    </Typography>
                    <Typography>
                        {futsal.no_of_grounds}
                    </Typography>
                    <Typography>
                        {futsal.description}
                    </Typography>
            </Card>
        ))}
       </>
    )
}

export default Futsal;