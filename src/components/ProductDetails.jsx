import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row, Button, Card } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import '../App.css';

export default function ProductDetails({handleAddToCart}) {
    const location = useLocation();
    const navigate = useNavigate();
    
  const [cartItems, setCartItems] = useState({});
    const {title, price, images, description, category, id} = location.state;

    const [otherProducts, setOtherProducts] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${category.id || 1}/products?limit=21&offset=0`);
            setOtherProducts(response.data);
        }
        getData();
    }, [])

    return (
        <div style={{padding: 50}}>
            <Row>
                <Col lg={2}>
                <div>
                        {images.map((image, index) => {
                            return (
                                <img key={index} src={image} width={150} style={{marginBottom: 20, borderRadius: 8}} />
                            )
                        })}
                    </div>
                </Col>
                <Col lg={5}>
                    <img src={images[0]} width={550} style={{marginBottom: 20, borderRadius: 8}} />
                    <h3>{title}</h3>
                    <h3 style={{color: '#216ad9'}}>${price}</h3>
                    <div style={{width: 550}}>{description}</div>
                    <Button onClick={() => {
                        if (id in cartItems) {
                            handleAddToCart({[id]: {title, price, quantity: currentItem.quantity + 1}})
                        }else {
                            handleAddToCart({[id]: {title, price, quantity: 1}})
                        }
                        navigate('/cart');
                    }}
                    style={{marginTop: 30}}>Add to cart</Button>
                </Col>
                <Col lg={5}>
                        <h2>Similar Category of Products</h2>
                    <div className="productsDisplayPage" style={{display:"flex", flexWrap: "wrap", overflow: "auto", maxHeight: "630px",width:'44vw'}}>
                    {otherProducts.map((product) => {
                        if(product.id == id) return
                        return (
                            <Card key={product.id} style={{ width: "10rem", border: "none", margin: "1rem" }}>
              <Card.Img src={product.images[0]} />
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>${product.price}/-</Card.Text>
              <Button onClick={() => {
                  navigate(`/product/${product.id}` , {state: product})
                }}
                style={{width: 120}}>View Item</Button>
            </Card>
          );
        })}
        </div>
                    
                </Col>
            </Row>
        </div>
    )
}