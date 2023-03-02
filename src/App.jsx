import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Badge, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";
import Home from './components/Home';
import Logo from './assets/Logo.png';
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProductGallery from "./components/ProductGallery";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/cart";
import Checkout from "./components/checkout";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [cartItems, setCartItems] = useState({});


  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
      setUser(userEmail)
    }
  }, []);

  const handleAddToCart = (item) => {
    setCartItems({...cartItems, ...item});
  }




  return (
    <div>
      <Navbar className="instabuy-navbar">
        <Container>
          <Navbar.Brand onClick={() => navigate('/')}>
            <img src={Logo} 
            alt="" 
            width="30" 
            height="30" 
            className="d-inline-block align-top"
            />{' '}
            InstaBuy!
            </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {user && <Button onClick={() => navigate('/cart')}>Cart &nbsp; {Object.keys(cartItems).length > 0 &&(<Badge bg="success">{Object.keys(cartItems).length}</Badge>)}</Button>}
            &nbsp;&nbsp;
            <Button onClick={() => {localStorage.clear(); navigate('/login');window.location.reload()}}>{user ? 'LOGOUT' : 'LOGIN'}</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home user={user}/>}></Route>
        <Route path="/login" element={<Login setUser={setUser}/>}></Route>
        <Route path="/signup" element={<Signup setUser={setUser}/>}></Route>
        <Route path="/products" element={<ProductGallery/>}></Route>
        <Route path="/product/:id" element={<ProductDetails handleAddToCart={handleAddToCart} cartItems={cartItems}/>}></Route>
        <Route path="/cart" element={<Cart cartItems={cartItems}/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>


      </Routes>
      
      
      
    </div>
  );
}

export default App;
