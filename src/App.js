import logo from './logo.svg';
import './App.css';
import LogIn from './Pages/LogIn';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './Pages/Home'
function App() {

const [isLoggedIn,setLoggedIn]=useState(false);


const handleLoginSuccess=()=>{
  setLoggedIn(true);
}

  return (<>


<BrowserRouter>
  <Routes>
    <Route path='/' element={<LogIn onLoginSuccess={handleLoginSuccess}/>}> </Route>
    <Route path='/home' element={<Home isLoggedIn={isLoggedIn}/>}> </Route>
  </Routes>
</BrowserRouter>

  </>
   
  );
}

export default App;
