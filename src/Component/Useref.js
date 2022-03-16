import React, { useRef, useState } from "react";

function Useref(){

    const [count1, setCount1] = useState(0);
    const count2 = useRef(0);

    return(
        <div className='container3 mt-5 pt-3'>
            <h1>리액트 훅 : useRef</h1>
            <p>count1의 값 : <span className="red">{count1}</span></p>
            <p>count2의 값 : <span className="red">{count2.current}</span></p>
            
            <button onClick={()=>{setCount1(count1+1)}}>count1 증가! (useState)</button> 
            <button onClick={()=>{count2.current += 1}}>count2 증가! (useRef)</button>
            <p>useRef를 사용하면 재랜더링이 발생하지 않아 값이 실시간으로 반영되지 않는다. 다른 요소로 재랜더링을 발생시킴으로 값이 반영된다. 값은 변경되지만 랜더링이 발생되지 않아야 하는 상황에 사용 가능하다</p>
        </div>
    )
}
export default Useref