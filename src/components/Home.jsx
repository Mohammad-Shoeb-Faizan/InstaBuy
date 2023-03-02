// imports here 
import '../App.css';
import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CarouselOneImg from "../assets/carousel-1.png";
import CarouselTwoImg from "../assets/carousel-2.png";
import CarouselThreeImg from "../assets/carousel-3.png";
import GroceryLogo from "../assets/grocerylogo.png";
import BagLogo from "../assets/baglogo.png";
import ElectronicsLogo from "../assets/elctronicslogo.png";
import ShirtsLogo from "../assets/shirtslogo.png";
import PantsLogo from "../assets/pantslogo.png";
import { useNavigate } from 'react-router-dom';

// Styling here 
const IconImagesDiv = { style: { display: 'flex', height:'110px', width: '100%' } }
const IconImages = { style: { display: 'flex', height: '100px', width: '100px', marginRight: '2rem', marginTop: '2rem' } };
const RightSide = {style: {position: 'fixed', bottom: '0'}}
const RightSideSet = {style: {marginLeft: '5rem', Sposition: 'fixed', bottom: '0'}}

// function here 
export default function Home({user}) {
  const navigate = useNavigate();

  const handleCTAClick = () => {
    if (user) {
        navigate('/products')
    }else{
      navigate('/login')
    }
  }
  return (
    <Carousel className='home-container'>
      <Carousel.Item 
      interval={1500}
      >
        <Row>
          <Col style={{width: '50vw', padding: '8rem'}}>
          <h3 style={{fontWeight: '600'}}><i>SHOP WITH UTMOST</i></h3>
        <h4 style={{fontWeight: '700', color: 'red'}}><i>CONFIDENCE</i></h4>
        <p>Shop from the latest trendy  clothes to the best gadgets. <br />
          With Star Shopper, you save 10% every time you shop!</p>
        <Button onClick = {() => {
          handleCTAClick();
        }}
         style={{ margin: '1rem' }} type="button">Browse Products</Button>
        <h3>Products available from:</h3>
        <div style={IconImagesDiv.style}>
          <img style={IconImages.style}  src={GroceryLogo} />
          <img style={IconImages.style}  src={BagLogo} />
          <img style={IconImages.style}  src={ElectronicsLogo} />
          <img style={IconImages.style}  src={ShirtsLogo} />
          <img style={IconImages.style}  src={PantsLogo} />    
          </div>    
          </Col>
          <Col style={{width: '50vw'}}>
            <img style={RightSide} src={CarouselOneImg} />
          </Col>
        </Row>
        </Carousel.Item>
        <Carousel.Item 
        interval={1500}
        >
        <Row>
          <Col style={{width: '50vw', padding: '8rem'}}>
          <h3 style={{fontWeight: '600'}}><i>SHOP WITH UTMOST</i></h3>
        <h4 style={{fontWeight: '700', color: 'red'}}><i>STYLE</i></h4>
        <p>Shop from the latest trendy  clothes to the best gadgets. <br />
          With Star Shopper, you save 10% every time you shop!</p>
        <Button onClick = {() => {
          handleCTAClick();
        }}
         style={{ margin: '1rem' }} type="button">Browse Products</Button>
        <h3>Products available from:</h3>
        <div style={IconImagesDiv.style}>
          <img style={IconImages.style}  src={GroceryLogo} />
          <img style={IconImages.style}  src={BagLogo} />
          <img style={IconImages.style}  src={ElectronicsLogo} />
          <img style={IconImages.style}  src={ShirtsLogo} />
          <img style={IconImages.style}  src={PantsLogo} />  
          </div>
          </Col>
          <Col style={{width: '50vw'}}>
            <img style={RightSideSet} src={CarouselTwoImg} />
          </Col>
        </Row>
        </Carousel.Item>
        <Carousel.Item 
        interval={1500}
        >
        <Row>
          <Col style={{width: '50vw', padding: '8rem'}}>
          <h3 style={{fontWeight: '600'}}><i>SHOP WITH UTMOST</i></h3>
        <h4 style={{fontWeight: '700', color: 'red'}}><i>DISCOUNT</i></h4>
        <p>Shop from the latest trendy  clothes to the best gadgets. <br />
          With Star Shopper, you save 10% every time you shop!</p>
        <Button onClick = {() => {
          handleCTAClick();
        }}
         style={{ margin: '1rem' }} type="button">Browse Products</Button>
        <h3>Products available from:</h3>
        <div style={IconImagesDiv.style}>
          <img style={IconImages.style}  src={GroceryLogo} />
          <img style={IconImages.style}  src={BagLogo} />
          <img style={IconImages.style}  src={ElectronicsLogo} />
          <img style={IconImages.style}  src={ShirtsLogo} />
          <img style={IconImages.style}  src={PantsLogo} />  
          </div>
          </Col>
          <Col style={{width: '50vw'}}>
            <img style={RightSide} src={CarouselThreeImg} />
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
  );
}
