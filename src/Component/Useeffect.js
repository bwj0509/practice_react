import React, { useState, useEffect } from 'react';

function Useeffect(){
    
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

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
        <div className='container2 mt-5 pt-3'>
            <h1>리액트 훅 : useEffect</h1>
            <p>count1의 값 : <span className="red">{count1}</span></p>
            <p>count2의 값 : <span className="red">{count2}</span></p>

            <button onClick={()=>{setCount1(count1+1)}}>count1 증가! (useState)</button> 
            <button onClick={()=>{setCount2(count2+1)}}>count2 증가! (useState)</button>
            <br/><span>console.log를 확인하세요</span>
            
        </div>
        
    )
}
export default Useeffect;