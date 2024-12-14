import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Card from './Components/Card';
import Home from './Components/HomePages';
import { Route, Routes } from 'react-router-dom';
import Details from './Components/details';
import { useState } from 'react';
import Cart from './Components/Cart';
import { Toaster } from 'react-hot-toast';
import Search from './Components/search';


function App() {
  
  return (
    <>
    <Toaster />
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/details/:ID' element={<Details/>}/>
      <Route path='/Cart' element={<Cart />}/>
      <Route path='/search/:type' element={<Search />}/>
    </Routes>
    
    </>
  );
}

export default App;
