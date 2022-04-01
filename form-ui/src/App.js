import Login from './auth/Login';
import HomePage from './components/HomePage';
import './App.css';
import Signup from './auth/Sign-up';
import Home from './components/LandingPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<HomePage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/sign-up' element={<Signup/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
