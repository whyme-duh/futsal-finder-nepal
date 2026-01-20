import './App.css';
import Home from './pages/Home';
import Futsal from './pages/Futsals';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AboutUs from './pages/aboutus';
import FutsalDetailPage from './detailPages/fustalDetailPage';
import FindPlayer from './pages/findplayer';
import LoginPage from './pages/users/Login';
import SignUp from './pages/users/Signup';
import { Profile } from './pages/users/Profile';
import {ProtectedRoute, PublicRoute} from './components/AuthGaurds';
import { AuthProvider } from './context/AuthContext';
import {ToastContainer} from 'react-toastify';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/futsals' element={<Futsal/>}/>
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path='/findplayer' element={<FindPlayer/>}/>
            <Route path='/futsals/:slug' element={<FutsalDetailPage/>}/>
            <Route path='/playerlogin' element={
              <PublicRoute>
                <LoginPage/>
              </PublicRoute>
            }/>
            <Route path='/playersignup' element={
              <PublicRoute>
                <SignUp/>
              </PublicRoute>
            }/>
            <Route path='/profile' element={
              <ProtectedRoute>
                <Profile/>
              </ProtectedRoute>
            }/>
          </Routes>
        </div>
        <ToastContainer position='top-right' autoClose={1000}/>
      </BrowserRouter>
    </AuthProvider>
      
  );
}

export default App;
