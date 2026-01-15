import './App.css';
import Home from './pages/Home';
import Futsal from './pages/Futsals';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AboutUs from './pages/aboutus';
import FindPlayer from './pages/findplayer';


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
        </Routes>
      </div>
      
    </BrowserRouter>
      
  );
}

export default App;
