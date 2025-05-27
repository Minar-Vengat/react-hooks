import './App.css';
import Pract from './Components/Practes'
import Form from './Components/FormTracker'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Color from './Components/ColorChanger'
import LikeButton from './Components/LikeButton';
import Clock from './Components/DigitalClock'
import RegistrationForm  from './Components/Registration'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Pract/> } />
      <Route path='/form' element={<Form/>}/>
      <Route path='/color' element={<Color/>}/>
      <Route path='/like' element={<LikeButton/>}/>
      <Route path='/clock' element={<Clock/>}/>
      <Route path='/RForm'  element={<RegistrationForm/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
