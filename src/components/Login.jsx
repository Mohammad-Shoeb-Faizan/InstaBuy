import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import LoginImage from "../assets/login.png";
import LogoBlack from "../assets/logoblack.png";
import SubmitArrow from "../assets/arrow.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("userData")) || []);
  const navigate = useNavigate();

  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all the fields");
      return;
    }

    const user = userData.email === email && userData.password === password;
if (!user) {
  setError("Invalid email or password");
  return;
}
    // Login successful
    localStorage.setItem("userEmail", email);
    navigate("/");
  };

  return (
    <div style={{ background: "#216ad9" }}>
      <Row style={{ height: "93vh" }}>
        <Col style={{ width: "50vw", padding: "12rem 0 0 5rem" }}>
          <div>
            <h1 style={{ color: "white" }}>
              <img src={LogoBlack} /> InstaBuy!
            </h1>
            <h3 style={{ color: "white", marginBottom: "2rem" }}>One place for all your needs</h3>

            <Form onSubmit={handleSubmit}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Form.Group style={{ width: "49%" }} className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" onChange={(e) => setEmail(e.currentTarget.value)} placeholder="Enter email" />
                </Form.Group>

                <Form.Group style={{ width: "49%" }} className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" onChange={(e) => setPassword(e.currentTarget.value)} placeholder="Password" />
                </Form.Group>
              </div>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <Button
                style={{ width: "75%", marginLeft: "4rem", marginBottom: "2rem", background: "#216ad9", borderWidth: 1, borderColor: "white", color: "white" }}
                type="submit"
              >
                Start Shopping <img style={{ height: "2rem", width: "4rem" }} src={SubmitArrow} />
              </Button>
              <div style={{ color: "white" }}>
                Join the club, <a onClick={() => navigate("/signup")} style={{ color: "white" }}>
                  Click Here!
                </a>
              </div>
            </Form>
          </div>
        </Col>
        <Col style={{ width: "50vw" }}>
          <img src={LoginImage} style={{ margin: "5rem 0 0 2rem", height: "80vh" }} />
        </Col>
      </Row>
    </div>
  );
}
