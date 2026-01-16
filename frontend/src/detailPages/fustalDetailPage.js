import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Container, Typography} from '@mui/material';
import axios from 'axios';
import futsalimg from '../assets/futsal.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import GridOnIcon from '@mui/icons-material/GridOn';
import './futsalDayPageStyle.css';
import ground from '../assets/ground.png';
import ShowerIcon from '@mui/icons-material/Shower';

function FutsalDetailPage(){
    const {slug} = useParams();

    const [futsal, setFutsal] = useState([]);

    useEffect(()=>{
        const fetchFutsals = async ()=>{
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/futsals?slug=${slug}/`);
                const data = await response.data;
                console.log(data);
                setFutsal(Array.isArray(data) ? data[0] : data);
            } catch (error) {
                console.log("The error is: ",error);
            }
        };
        fetchFutsals();
    }, [slug]);
    return (
        <>
        <Container>
            <img src={futsalimg} alt="futsal-image" className='img-futsal-detail-page' />
            <div className="fustal-detail-booking">
                <div className="futsal-content">
                    <Typography variant='h3' fontFamily={'ui-monospace'}>
                        {futsal.name}
                    </Typography>
                    <div className="location">
                        <LocationOnIcon />
                        {futsal.location}, Kathmandu
                    </div>
                    <div className="facilities-icons">
                        <div className="facility">
                            <img src={ground} alt="" className='facility-icon-img'/>
                            <p>5*5 size</p>
                        </div>
                        <div className="facility">
                            <GridOnIcon sx={{fontSize:'40px'}}/>
                            <p>Artificial Turf</p>
                        </div>
                        <div className="facility">
                            <DirectionsCarIcon sx={{fontSize:'40px'}}/>
                            <p>Parking Available</p>
                        </div>
                        <div className="facility">
                            <ShowerIcon sx={{fontSize:'40px'}}/>
                            <p>Shower</p>
                        </div>
                        
                    </div>
                    <Typography 
                        variant="p" 
                        dangerouslySetInnerHTML={{ __html: futsal.description }} 
                        />
                </div>
                <div className="booking-container">
                    <h5>Book NOW</h5>
                </div>
            </div>
        </Container>
        </>
    )
}

export default FutsalDetailPage;