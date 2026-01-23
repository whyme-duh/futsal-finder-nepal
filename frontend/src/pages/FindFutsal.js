import {Container, TextField, Button, InputAdornment, IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './findfutsal.css';

export function FindFutsal(){
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
        </>
    )
}