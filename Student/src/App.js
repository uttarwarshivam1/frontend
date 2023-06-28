import logo from './logo.svg';
import './App.css';
import { Button, Col, Container, Row } from "reactstrap" ;
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer , toast } from 'react-toastify';

import Header  from './components/Header';
import Home from './components/Home';
import Student from './components/Student';
import AllStudents from './components/AllStudents';
import AddStudent from './components/AddStudent';
import Menus from './components/Menus';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom" ;
import AboutUs from './components/AboutUs';


function App() {

  


  return (

    <div>
      <Router>
      <ToastContainer />
     <Container>

      <Header/>
      <Row>
        <Col md={4}>
          <Menus />
        </Col>

        <Col md={8}>
          <Routes>
          <Route path="/" Component={Home} exact />
          <Route path="/add-student" Component={AddStudent} exact />
          <Route path="/view-students" Component={AllStudents} exact />
          <Route path="/Aboutus" Component={AboutUs}></Route>
          </Routes>
        </Col>
      </Row>
     </Container>
      </Router>
      
    </div>
    
  );
}

export default App;

