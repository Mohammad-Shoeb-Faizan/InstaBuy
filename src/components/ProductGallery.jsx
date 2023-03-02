import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ProductGallery() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getProducts() {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/products"
      );
      console.log(response.data);
      setProducts(response.data);
    }
    getProducts();
  }, []);

  return (
    <div style={{ padding: 50 }}>
      <h3>Select A Product </h3>
      <div
        className="productsDisplayPage"
        style={{
          display: "flex",
          flexWrap: "wrap",
          overflow: "auto",
          maxHeight: "630px",
        }}
      >
        {products.map((product) => {
          return (
            <Card key={product.id} style={{ width: "18rem", border: "none", margin: "2rem" }}>
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
    </div>
  );
}
