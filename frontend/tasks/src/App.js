import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayout from './views/Auth';
import HomeLayout from './views/Home';
import React from 'react';
import Navbar from './Navbar';
import Homepage from './Homepage';
import './index.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthLayout />}/>
          <Route path='/home' element={<HomeLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
