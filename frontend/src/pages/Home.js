import {useState, useEffect} from 'react';
import axios from 'axios';


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
        {futsals.map(fustal => (
            <div>
                {fustal.name}
            </div>
        ))}
        </>
    );
}

export default Home;