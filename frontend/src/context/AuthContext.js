import { useEffect, useState, createContext } from "react"
import axios from 'axios';


export const AuthContext = createContext();


export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    const logout = () =>{
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        setUser(null);
    }

    useEffect(()=>{
        const verifyUser = async () =>{
            const token = localStorage.getItem('access');
            if (!token){
                setUser(null);
                return;
            }
            try{
                const response = await axios.get("http://localhost:8000/profile/",{
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                });
                setUser(response.data);
            }catch(error){
                console.log("ERROR OCURRED: " , JSON.stringify(error.response.data));
                localStorage.removeItem('access');
                setUser(null);
            }
        };
        verifyUser();
    }, []);

    const login = async (username, password) => {
        const res = await axios.post('http://localhost:8000/api/token/', {
            username,
            password
        });
        
        localStorage.setItem('access', res.data.access);
        localStorage.setItem('refresh', res.data.refresh);
        
        const userRes = await axios.get('http://localhost:8000/profile/', {
            headers: { Authorization: `Bearer ${res.data.access}` }
        });
        setUser(userRes.data);
        return userRes.data;
    };

   
   
    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );

};