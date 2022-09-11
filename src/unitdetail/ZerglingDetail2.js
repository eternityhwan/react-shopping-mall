import { useEffect, useState} from "react"
import { a } from "../Data"



function ZerglingDetail2 () {
  
let [alert, setAlert] = useState(true)

  useEffect(() => {
    // 컴포넌트가 mount,update 시 코드 작동한다
    // useEffect 언제쓰냐?
    // 동작원리 useEffect 실행시점
    // [] useEffect의 실행시점을 넣는다.
    // [count] 이렇게 쓰면 count가 변할 때만 실행된다.

    // 콜백함수 안에 넣은 코드는 렌더링이 끝난 후 동작한다
   
      let a =  setTimeout(() => { setAlert(false)}, 2000)
    return () => {
      console.log('타이머제거')
      clearTimeout(a)
    }
    }, [])
    console.log('useEffect 작동 중 컴포넌트가 mount,update 시 코드 작동한다')
    return(
    <div className="container">
      { 
        alert == true ? <div><p>2초이내 구매시 할인</p> </div> : null
      }
    <div className="row">
      <div className="col-md-6">
      <img src={process.env.PUBLIC_URL + '/zergling2.jpg'} width="100%"/>
      </div>
      <div className="col-md-6">
        <h4 className="pt-5">랩터 저글링</h4>
        <p>언덕 오르내림, 공격력 조금 더 쎔</p>
        <p>50 미네랄</p>
        <button className="btn btn-danger">주문하기</button> 
      </div>
    </div>
  </div> 
    )
  }
  
  export default ZerglingDetail2;