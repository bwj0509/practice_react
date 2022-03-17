import { useState, useRef } from "react"

function Refselect_dom(){

    const nameInput = useRef();

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
        nameInput.current.focus()
        
    }

    return(
        <div className="container6 mt-5 pt-3">
            <h1>Ref로 특정 DOM 선택하기</h1>
            <p>초기화 버튼을 눌렀을때, input에 focus가 잡힐 수 있도록 하기</p>
            <p>1. const nameInput = useRef();</p>
            <p>2. input 태그안에 ref=&#123;nameInput&#125; 넣기</p>
            <p>3. 초기화 버튼을 눌렀을때, nameInput.current.focus() 실행되도록 하기</p>
            <p>!. useRef를 이용해 Ref객체를 만들고, 선택하고 싶은 DOM에 ref값으로 설정해준다음, ref.current로 접근을 해서, focus() DOM API를 호출!</p>

            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput}/>
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <p>{name}({nickname}) </p>
        </div>
    )
}export default Refselect_dom