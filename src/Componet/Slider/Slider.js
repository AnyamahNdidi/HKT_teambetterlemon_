import React from 'react'
import pix from "../../img/1.jpg"
import pix2 from "../../img/2.jpg"
import pix3 from "../../img/ship3.jpg"
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import './slide.css'
import Mainbody from '../Mainbody/Mainbody'
import MiddleContent from '../MiddleContent/MiddleContent'
function Slider() {
  return (

    <div className="slide_container">

      <Carousel >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pix}
            alt="First slide"


          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p style={{ color: "green" }}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pix2}
            alt="Third slide"

          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pix3}
            alt="Third slide"

          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>


  )
}

export default Slider
