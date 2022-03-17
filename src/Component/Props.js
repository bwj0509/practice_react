function Props(props){
    return(
        <div className="container4 mt-5 pt-3">
            <h1>리액트 Props사용</h1>
            <span style={{fontSize:'2vw'}}>App.js에서 사용한 변수를 Props.js에서 사용하는 방법에 대해서 알아보자</span>
            <br/><br/><span>1. 부모 컴포넌트에서 자식 컴포넌트로 값을 보내준다.</span>
            <br/><span>2. 자식 컴포넌트에서 함수 매개면수에 props를 사용해서 값을 사용 할 수 있다.</span>
            <br/><span>3. 사용법은 오른쪽 코드 참조    myName은 <span className="red">{props.myName}</span>입니다.</span>
            <br/><span>4. 부모 컴포넌트에서 자식컴포넌트로 여러개의 값을 전달 할 수도 있다.</span>
        </div>
    )
}export default Props