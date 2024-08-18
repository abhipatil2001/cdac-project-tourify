import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselItem,
} from "mdb-react-ui-kit";
import React from "react";
import "./carousel.css";

const Carousel = () => {
  return (
    <div>
      <MDBCarousel showIndicators showControls fade>
        <MDBCarouselItem itemId={1}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/tourify-19feb.appspot.com/o/1_large.jpg?alt=media&token=7919e16e-eec6-4fcc-ac09-0cb6b1a01933"
            className="d-block w-100 myImg"
            alt="..."
          />
          <MDBCarouselCaption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={2}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/tourify-19feb.appspot.com/o/2_large.jpg?alt=media&token=7af980da-eb43-49d3-a3c5-64b64ebe2291"
            className="d-block w-100 myImg"
            alt="..."
          />
          <MDBCarouselCaption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={3}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/tourify-19feb.appspot.com/o/1_large.jpg?alt=media&token=7919e16e-eec6-4fcc-ac09-0cb6b1a01933"
            className="d-block w-100 myImg"
            alt="..."
          />
          <MDBCarouselCaption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarousel>
    </div>
  );
};

export default Carousel;
