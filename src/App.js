import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {a,b, data} from './Data.js'
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ZerglingDetail2 from './unitdetail/ZerglingDetail2';
import styled from 'styled-components'
import axios from 'axios'

// 스타일드로 만든 CSS 기능은 다른 파일에 간섭하지 않음
let Yeelowbtn = styled.button`
 background : yellow;
 color : black;
 padding : 10px;
`

function App() {

   let [zergstate] = useState(data)
  // Route 하나당 페이지 하나이다.
  // path 뒤 경로로 들어오면 element에 보여줄 html을 적음
  let navigate = useNavigate();
  // useNavigate 페이지를 이동하는 함수이다.
  // 지금까지는 Link 태그를 썼었잖아.
  // 클릭시 다른페이지로 이동하는 기능
  // <Nav.Link onClick={() => { navigate('/')}}>Home</Nav.Link> 이런식으로됨

  const [axiosGet, setAxiosGet] = useState()

  return (
    <div className="App">
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link onClick={() => { navigate('-1')}}>MoveBackPasge</Nav.Link>
            <Nav.Link onClick={() => { navigate('/')}}>Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Yeelowbtn>버튼</Yeelowbtn>
     
      <Button variant="outline-secondary">
      <Link  to="/">홈</Link>
      </Button>
      <Button variant="outline-secondary">
      <Link  to="/detail">상세페이지</Link>
      </Button>
      <Button variant="outline-secondary">
      <Link  to="/about">어바웃페이지</Link>
      </Button>
      <Routes>
          <Route path="/" element={
            <>
            <div className='main-bg'></div>
            <div>
            {/* <Row>
                <GridComponent zergstate={zergstate[0]} i={1}></GridComponent>
                <GridComponent zergstate={zergstate[1]} i={2}></GridComponent>
                <GridComponent zergstate={zergstate[2]} i={3}></GridComponent>
            </Row> */}
            <Row>
              {
                zergstate.map((a,i) => {
                  return (
                    <GridComponent zergstate={zergstate[i]} i={i + 1}></GridComponent>
                  )
                })}
            </Row>
            </div>
          </>
          } />
          <Route path="/detail" element={
          <div>
            <h2>상세페이지</h2>
            <ZerglingDetail2/>
          </div>} />
          <Route path="/about" element={<About/>} >
           <Route path="member" element={<Member/>} />
           <Route path="location" element={<Location/>} />
          </Route>
          <Route path="*" element={<div>없는 페이지</div>} />
      </Routes>
      <button onClick={() => { 
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((response) =>{ 
                console.log(response.data)
                let copy = [response.data]
                setAxiosGet(copy);
                
              })
              .catch(
                console.log('실패')
              )
              

          }}>엑시오스겟</button>
      
    </div>
  );
}

export default App;

function GridComponent(props) {
  return(
  <Col sm>
      <img src={process.env.PUBLIC_URL + '/zergling' + props.i +'.jpg'} width="80%"/>
      <h4>{props.zergstate.title}</h4>
      <p>{props.zergstate.content}</p>
      <p>{props.zergstate.price}</p>
  </Col>
  )
}


function About() {
  return (
    <div>
      <h4>어바웃 정보</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Member() {
  return (
    <div>
      <h4>멤버</h4>
    </div>
  )
}

function Location() {
  return(
  <div>
    <h4>위치</h4>
  </div>
  )
}
