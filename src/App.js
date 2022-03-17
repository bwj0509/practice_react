import './App.css';
import './App.scss';
import React from 'react';
import Title from './Component/Title';
import Style from './Component/Style';
import Usestate from './Component/Usestate';
import Useeffect from './Component/Useeffect';
import Useref from './Component/Useref';
import Props from './Component/Props';
import Showui from './Component/Showui';
import Input from './Component/Input';
import { Link, Route, Routes } from 'react-router-dom';



function App() {

  const myName = 'WOOJIN';

  return (
    <>
      <Routes>
        <Route path='/' element={
        <>
          <Style/>
          <Title/>
          <Usestate/>
          <Useeffect/>
          <Useref/>
          <Props myName={myName}/>
          <Showui/>
          <Input/>

        </>}/>
      </Routes>
    </>
    );
  }
  
  export default App;
