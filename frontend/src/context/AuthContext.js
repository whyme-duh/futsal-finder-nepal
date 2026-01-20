import { useState } from "react"

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    const logout = () =>{
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
    }
}