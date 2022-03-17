import React, { useState } from "react";

function Usestate(){

    const [count1, setCount1] = useState(0);
    const [arr1, setArr1] = useState([]);

    return(
        <div className="container1 mt-5 pt-3">
            <h1>리액트 훅 : useState</h1>
            <p>count1의 값 : <span className="red">{count1}</span> (버튼을 누를때마다 랜더링된다)</p>
            <p>arr1의 값 : <span className="red">{arr1}</span> <br/>(버튼을 누를때마다 count1의 값이 배열의 요소로 추가된다)</p>

            <button onClick={()=>{setCount1(count1 + 1)}}>count1값 증가</button>
            <button onClick={()=>{setCount1(count1 -1)}}>count1값 감소</button>
            <button onClick={()=>{setArr1((prev)=>{return [...prev, count1]})}}>arr내용 변경</button>
            <p>버튼을 누를때마다 값을 보여준다. useState를 이용하면 값이 변경될때 랜더링되기에 반영된 수를 보여줄 수 있다.</p>
            {console.log(arr1)}
        </div>
    )
}export default Usestate