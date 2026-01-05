import './App.css';
import Home from './pages/Home';
import Futsal from './pages/Futsals';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/futsals' element={<Futsal/>}/>
        </Routes>
      </div>
      
    </BrowserRouter>
      
  );
}

export default App;
