import './App.css';
import './App.scss';
import React from 'react';
import Title from './Component/Title';
import Usestate from './Component/Usestate';
import Useeffect from './Component/Useeffect';
import Useref from './Component/Useref';
import { Link, Route, Routes } from 'react-router-dom';
import {  } from 'react-bootstrap';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<><Title/><Usestate/><Useeffect/><Useref/></>}/>
      </Routes>
    </>
    );
  }
  
  export default App;
