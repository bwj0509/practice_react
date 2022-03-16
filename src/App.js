import './App.css';
import React from 'react';
import Title from './Component/Title';
import UsingState from './Component/UsingState';
import { Link, Route, Routes } from 'react-router-dom';
import {  } from 'react-bootstrap';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<><Title/><UsingState/></>}/>
      </Routes>
    </>
    );
  }
  
  export default App;
