import {Container, Typography} from '@mui/material';
import MapTwoToneIcon from '@mui/icons-material/MapTwoTone';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import ShieldTwoToneIcon from '@mui/icons-material/ShieldTwoTone';


function AboutUs(){
    return (
        <>
        <Container sx={{display:"flex", flexDirection: "column",alignItems:"center", justifyContent:"center"}}>
            <div className="about-us-wrapper">
                <div className="about-us-container">
                    <h1>Book My Futsal</h1>
                    <h5>Connecting players with futsal arenas across Kathmandu.</h5>
                    <p>Our mission is to simplify the futsal booking process, making it easy for teams to discover
                    and reserve pitches, while helping arena owners manage their bookings efficiently. We
                    believe in the power of community and the iov of the aame.</p>
                </div>  
                <div className="services-provided services-provided-about">
                    <div className = "service service-about">
                        <MapTwoToneIcon sx={{fontSize:'5em', color:'green'}}/>
                        <h5>Find Nearby Futsals</h5>
                        <p>There are som telecated x wide 
                            selection, owners and ooinion, vilclo
                            owz ets cax to choa to discover and
                            reserve pitches.
                        </p>
                    </div>  
                    <div className = "service service-about">
                        <CalendarMonthTwoToneIcon sx={{fontSize:'5em', color:'green'}}/>
                        <h5>Check Availabilty</h5>
                        <p>There are som telecated x wide 
                            selection, owners and ooinion, vilclo
                            owz ets cax to choa to discover and
                            reserve pitches.
                        </p>
                    </div>  
                    <div className = "service service-about">
                        <ShieldTwoToneIcon sx={{fontSize:'5em', color:'green'}}/>
                        <h5>Booking</h5>
                        <p>There are som telecated x wide 
                            selection, owners and ooinion, vilclo
                            owz ets cax to choa to discover and
                            reserve pitches.
                        </p>
                    </div>                
                </div>
            </div>        
        </Container>
        </>
    )
}

export default AboutUs;