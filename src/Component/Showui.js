import { useState } from "react"

function Showui(){

    const [showui, setShowui] = useState(true);

    return(
        <>
            { showui
            ? <div className="container5 mt-5 pt-3"><h1>UI 보여주기, 가리기</h1><a>삼항연산자를 이용해서 표현 할 수도 있지만 보여주고, 가리고 간단한 작업은 && 연산자 이용해서도 가능하다 ex) showui && (보여줄UI)</a></div>
            : null
            }
            <div className="center">
                <button className="red mt-1" onClick={()=>{setShowui(!showui)}}>
                    {showui?<>Hide</>:<>Show</>}
                </button>
            </div>
            
        </>
               
    )
}export default Showui