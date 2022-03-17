import './App.css';
import './App.scss';
import React, { useRef, useState } from 'react';
import Title from './Component/Title';
import Style from './Component/Style';
import Usestate from './Component/Usestate';
import Useeffect from './Component/Useeffect';
import Useref from './Component/Useref';
import Props from './Component/Props';
import Showui from './Component/Showui';
import Input from './Component/Input';
import Refselect_dom from './Component/Refselect_dom'
import { Link, Route, Routes } from 'react-router-dom';
import Arrayrendering from './Component/Arrayrendering';
import CreateUser from './Component/CreateUser';
import UserList from './Component/UserList';



function App() {

  const myName = 'WOOJIN';

  const [inputs, setInputs] = useState({
    username:'',
    email:''
  })

  const { username, email } = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];

  const nextId = useRef(4);
  const onCreate = ()=>{
    //나중에 구현 할 배열에 항목 추가 로직
    console.log('oncreate작동합니다.')
    setInputs({
      username:'',
      email:''
    })
    nextId.current += 1;
  }





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
          <Refselect_dom/>
          <Arrayrendering/>
          
        </>}/>
      </Routes>
      <div>
        <CreateUser onCreate={onCreate} onChange={onchange} username={username} email={email}/>
        <UserList users={users} />
      </div>
    </>
    );
  }
  
  export default App;
