import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import SignupImage from "../assets/signup.png";
import LogoBlack from "../assets/logoblack.png";
import SubmitArrow from '../assets/arrow.png'
import { useNavigate } from "react-router-dom";

export default function Signup({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !fullName) {
      alert("You are not done yet. Please fill all the details.");
      return;
    }

    const userData = { email, password, name: fullName };
    localStorage.setItem('userData', JSON.stringify(userData));
    setUser(userData);
    navigate('/');
  }

  return (
    <div style={{ background: "#216ad9" }}>
      <Row style={{ height: "93vh" }}>
        <Col style={{ width: "50vw", padding: '12rem 0 0 5rem' }}>
          <div>
            <h1 style={{ color: "white" }}>
              <img src={LogoBlack} alt="logo"/> InstaBuy!
            </h1>
            <h3 style={{ color: "white", marginBottom: '2rem' }}>One place for all your needs</h3>

            {/* Form Component  */}

            <Form onSubmit={handleSubmit}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Form.Group style={{width: '49%'}} className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" onChange={(e) => setEmail(e.currentTarget.value)} placeholder="Enter email" />
                </Form.Group>

                <Form.Group style={{width: '49%'}} className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" onChange={(e) => setPassword(e.currentTarget.value)} placeholder="Password" />
                </Form.Group>
              </div>
              <Form.Group style={{width: '70%'}} className="mb-3" controlId="formBasicText">
                <Form.Control type="text" onChange={(e) => setFullName(e.currentTarget.value)} placeholder="Enter Full Name" />
              </Form.Group>

              <Button
                style={{ width: "75%", marginLeft: '4rem', marginBottom: '2rem' ,background:'#216ad9', borderWidth: 1, borderColor: 'white', color: 'white' }}
                type="submit"
              >
                Join the club <img style={{height: '2rem', width: '4rem'}} src= {SubmitArrow} alt="submit arrow"/>
              </Button>

              <div style={{color: 'white'}}>
                Already a member?, <a onClick={() => { navigate('/login')}} style={{color: 'white'}}>Click Here!</a>
              </div>
            </Form>

            {/* Ends Here  */}

          </div>
        </Col>
        <Col style={{ width: "50vw" }}>
          <img
            src={SignupImage}
            alt="signup"
            style={{ margin: "5rem 0 0 2rem", height: "80vh" }}
          />
        </Col>
      </Row>
    </div>
  );
}
