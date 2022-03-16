import logo from './logo.svg';
import Login from './auth/Login';
import Home from './Homepage';
import './App.css';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
    <body>
      <BrowserRouter>
      <Routes>
        <Route path = '' element = { <Home />} />
        <Route path = '/login' element = { <Login />} />
      </Routes>
      </BrowserRouter>
    </body>
    
    </>
  );
}

export default App;
