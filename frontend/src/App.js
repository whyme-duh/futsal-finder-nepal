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


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/futsals' element={<Futsal/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/findplayer' element={<FindPlayer/>}/>
          <Route path='/futsals/:slug' element={<FutsalDetailPage/>}/>
          <Route path='/playerlogin' element={<LoginPage/>}/>
          <Route path='/playersignup' element={<SignUp/>}/>
        </Routes>
      </div>
      
    </BrowserRouter>
      
  );
}

export default App;
