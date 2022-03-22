import Login from './auth/Login';
import HomePage from './components/HomePage';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <body>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<HomePage/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
      </body>

    </>
  );
}

export default App;
