import { useState } from "react"

function Input(){

    const [inputs, setInputs] = useState({
        name:'',
        nickname:''
    });

    const { name, nickname } = inputs; // 비구조화 할당 실행

    const onChange = (e)=>{
        const { value, name } = e.target; //e.target에서 name과 value 추출
        setInputs({
            ...inputs,
            [name] : value
        })
    }

    const onReset = ()=>{
        setInputs({
            name:'',
            nickname:''
        })
    }

    return(
        <div className="container7 mt-5 pt-3">
            <h1>리액트 Input 관리</h1>
            <input name="name" placeholder="이름" onChange={onChange} value={name}/>
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <p>{name}({nickname}) </p>
        </div>
    )
}export default Input