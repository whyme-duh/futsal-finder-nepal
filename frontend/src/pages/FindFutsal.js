import {Container, TextField, Button, InputAdornment, IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {useState, useEffect} from 'react';
import axios from 'axios';
import './findfutsal.css';
import futsalPic from '../assets/futsal.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import './futsal.css';
import ground from '../assets/groundgreen.png';

import { Link } from 'react-router-dom';

export function FindFutsal(){

    const [futsals, setFutsal] = useState([]);
    useEffect(()=>{
        const listFutsals = async ()=>{
            try{
                const response = await axios.get("http://127.0.0.1:8000/api/futsals/");
                setFutsal(response.data);
                console.log(response.data);
            }
            catch(e){
                console.log("Error occured!" , e)
            }
        };
        listFutsals();
    }, [])
    return (
        <>
        <Container sx={{marginTop:'5em'}}>
            <h1 className='find-futsal-header'>Find futsal</h1>
            <div className="find-futsals-search-fields">
                <TextField sx={{width:'100%',
                    backgroundColor:'white'
                }} 
                slotProps={{
                    
                    input:{
                        startAdornment:<InputAdornment>
                            <IconButton>
                                <SearchIcon/>
                            </IconButton>
                        </InputAdornment>,
                        endAdornment:<InputAdornment>
                        <IconButton >
                            <button className='futsal-search-btn'>
                                Search
                            </button>
                        </IconButton>
                        </InputAdornment>
                    },
                }}
                />
                <div className="find-futsals-options">
                    <div className="form-field">
                        <label htmlFor="Date">Date</label>
                        <input type="date" />
                    </div>
                    <div className="form-field">
                        <label htmlFor="time">Time</label>
                        <select name="time" id="time">
                            <option>07-08</option>
                            <option>07-08</option>
                            <option>07-08</option>
                            <option>07-08</option>
                        </select>
                    </div>
                    <div className="form-field">
                        <label htmlFor="time">Price Range</label>
                        <select name="time" id="time">
                            <option>07-08</option>
                            <option>07-08</option>
                            <option>07-08</option>
                            <option>07-08</option>
                        </select>
                    </div>
                     <div className="form-field">
                        <label htmlFor="time">Turf Style</label>
                        <select name="time" id="time">
                            <option>07-08</option>
                            <option>07-08</option>
                            <option>07-08</option>
                            <option>07-08</option>
                        </select>
                    </div>
                </div>
            </div>
        </Container>
        <Container sx={{marginTop:'2em'}}>
            <div className="futsal-container">
                <h2 className="recommnded-futsal-header">Recommended Futsals</h2>
                <div className="futsal-list">
                    {futsals.map(futsal => (
                
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
                    ))}
                </div>
            </div>
            
        </Container>
        </>
    )
}