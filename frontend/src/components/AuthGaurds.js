import {Navigate} from 'react-router-dom';

export const ProtectedRoute = ({children}) => {
    const token = localStorage.getItem('access');

    if (!token){
        return <Navigate to='/playerlogin' replace/>;
    }
   
    return children;
};

export const PublicRoute = ({children}) => {
    const token = localStorage.getItem('access');

    if (token){
        return <Navigate to='/profile' replace/>
    }
    return children;
};