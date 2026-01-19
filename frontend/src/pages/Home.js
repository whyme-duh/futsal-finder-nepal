import {useState, useEffect} from 'react';
import {Container} from '@mui/material';
import MapTwoToneIcon from '@mui/icons-material/MapTwoTone';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import ShieldTwoToneIcon from '@mui/icons-material/ShieldTwoTone';
import axios from 'axios';
import image from '../assets/images.jpg';
import { Link } from 'react-router-dom';
import futsalPic from '../assets/futsal.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import './futsal.css';
import ground from '../assets/ground.png';


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
        <Container sx={{ position:'relative'}}>
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
            <div className="top-rated-futsals">
                <h1 className='top-rated-header'>Top Rated Futsals</h1>
                {futsals.map(futsal => (
                <Link to={`/futsals/${futsal.slug}`} style={{
                    textDecoration:'none',
                    color:'black'
                }}>
                <div className="futsal-card" key={futsal.id}>
                    <img src={futsalPic} alt="fustal-img" className='futsal-image' />
                    <div className="futsal-info">
                        <h2>{futsal.name}</h2>
                        <h5> <LocationOnIcon sx={{color:'green'}}/> {futsal.location}</h5>
                        <h5> <LocalPhoneOutlinedIcon sx={{color:'green'}}/> 01-4324322</h5>
                        <h5> <img src={ground} alt="futsal-icon" width={'20px'} /> {futsal.no_of_grounds} grounds</h5>
                    </div>
                    <Link to={`/futsals/${futsal.slug}`} style={{textDecoration:'none', color:'black'}}>
                    <button className='detail-btn'>View In Detail</button>
                    </Link>
                </div>
                </Link>
                ))}
            </div>
        </Container>
        </>
        
    );
}

export default Home;