import React, { useState, useEffect, useRef } from 'react';

function UsingState(){
    
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const count3 = useRef(0);

    useEffect(()=>{
        console.log('조건없이 동작하는 useEffect')
    }) // useEffect의 기본형, 조건없이 동작하기에 잘 사용하지 않는다.

    useEffect(()=>{
        console.log('랜더링후 한번만 실행되는 useEffect')
    },[]) // 콜백함수 뒤에 빈배열을 넣어 랜더링 후 단 한번만 실행된다.

    useEffect(()=>{
        console.log('랜더링때 한번, count1의 값이 변할때 실행되는 useEffect')
    },[count1]) // 처음에 랜더링될때 실행되고, count라는 변수가 변경될때마다 실행되는 useEffect



    return(
        <div className='container mt-5 pt-3'>
            <h1>리액트 훅 연습공간</h1>
            <p>count1의 값 : {count1}</p>
            <p>count2의 값 : {count2}</p>
            <p>count3의 값 : {count3.current}</p>

            <button onClick={()=>{setCount1(count1+1)}}>count1 증가! (useState)</button> 
            <button onClick={()=>{setCount2(count2+1)}}>count2 증가! (useState)</button>
            <button onClick={()=>{count3.current += 1}}>count3 증가! (useRef)</button>
            
            
        </div>
        
    )
}
export default UsingState;