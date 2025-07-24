// import image1 from "./images/i1.jpg";
// import image2 from "./images/12.jpg";
// import image3 from "./images/i3.jpg";
// import image4 from "./images/i4.jpg";

// const App=()=>{
//   return(
//     <>
//       <img src={image1} width="300" height="300"/>
//       <img src={image2} width="300" height="300"/>
//       <img src={image3} width="300" height="300"/>
//       <img src={image4} width="300" height="300"/>
//     </>
//   )
// }
// export default App;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Carousel from 'react-bootstrap/Carousel';
import myimg from "./images/download.jpeg";
import myimg1 from "./images/download1.jpeg";
import myimg2 from "./images/download2.jpeg";

const App=()=>{
  return(
    <>
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

         <Carousel fade>
      <Carousel.Item>
        <img src={myimg} height="100%" width="100%" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={myimg1} height="100%" width="100%"  />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={myimg2} height="100%" width="100%"  />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}
export default App;