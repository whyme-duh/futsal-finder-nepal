import {useState, useEffect} from 'react';
import {Container} from '@mui/material';
import MapTwoToneIcon from '@mui/icons-material/MapTwoTone';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import ShieldTwoToneIcon from '@mui/icons-material/ShieldTwoTone';
import axios from 'axios';
import image from '../assets/images.jpg';
import futsalPic from '../assets/futsal.png';


function Home(){

    const [futsals, setFutsal] = useState([]);
    
    useEffect(()=>{
        const fetchFusals = async()=>{
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/futsals/");
                setFutsal(response.data);
            } catch (error) {
                console.log("Error found!", error);
            }
        }
       
        fetchFusals();
    }, [])
    
    return (
        <>
        <Container sx={{marginTop:'6em', position:'relative'}}>
            <img src={image} alt="" className='front-image-futsal'/>
            <div className="img-overlay">
                <div className="img-overlay-content">
                    <h1 className='image-overlay-header'>Easiest Way to Book Your Game</h1>
                    <h5 className='image-overlay-sub-header'>Find and reseve top futsal courts in your city with a few clicks.</h5>
                    <a href="#" className='find-futsal-btn'>Find Futsal</a>
                </div>
            </div>
            
        </Container>
        <Container>
            <div className="services-provided">
                <div className = "service">
                    <MapTwoToneIcon sx={{fontSize:'5em', color:'green'}}/>
                    <h5>Find Nearby Futsals</h5>
                </div>  
                <div className = "service">
                    <CalendarMonthTwoToneIcon sx={{fontSize:'5em', color:'green'}}/>
                    <h5>Check Availabilty</h5>
                </div>  
                <div className = "service">
                    <ShieldTwoToneIcon sx={{fontSize:'5em', color:'green'}}/>
                    <h5>Booking</h5>
                </div>                
            
            </div>
        </Container>
        <Container>
            <div className="top-rated-futsals">
                <h1 className='top-rated-header'>Top Rated Futsals</h1>
                {futsals.map(futsal => (
                <div className="futsal-card">
                    <img src={futsalPic} alt="fustal-img" className='futsal-image' />
                    <h2>{futsal.name}</h2>
                    <div className="futsal-info">
                       <h5> <strong>Location</strong>: {futsal.location}</h5>
                       <h5> <strong>Number</strong>: 01-4324322</h5>
                       <h5> <strong>Number of Grounds</strong>: {futsal.no_of_grounds}</h5>
                    </div>
                </div>
                ))}
            </div>
        </Container>
        </>
        
    );
}

export default Home;