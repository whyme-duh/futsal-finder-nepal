import {Container, TextField, Button, InputAdornment, IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './findfutsal.css';

export function FindFutsal(){
    return (
        <>
        <Container >
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
                        <IconButton>
                            <Button >
                                Search
                            </Button>
                        </IconButton>
                        </InputAdornment>
                    }
                }}
                />
                <div className="find-futsals-options">
                    <div className="form-field">
                        <label htmlFor="Date">Date</label>
                        <input type="date" />
                    </div>
                    <div className="form-field">
                        <label htmlFor="time">Time</label>
                        <input type="time" />
                    </div>
                    <div className="form-field">
                        <label htmlFor="time">Price Range</label>
                        <input type="time" />
                    </div>
                     <div className="form-field">
                        <label htmlFor="time">Price Range</label>
                        <input type="time" />
                    </div>
                </div>
            </div>
        </Container>
        </>
    )
}