import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBFooter,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div style={{ marginTop: "40px" }}>
      <MDBFooter className="bg-dark text-center text-white">
        <MDBContainer className="p-4 pb-0">
          <section className="mb-4">
            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#3b5998" }}
              // href="#!"
              role="button"
            >
              Facebook
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>

            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#55acee" }}
              // href="#!"
              role="button"
            >
              Twitter
              <MDBIcon fab icon="twitter" />
            </MDBBtn>

            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#dd4b39" }}
              // href="#!"
              role="button"
            >
              Google
              <MDBIcon fab icon="google" />
            </MDBBtn>
            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#ac2bac" }}
              // href="#!"
              role="button"
            >
              Instagram
              <MDBIcon fab icon="instagram" />
            </MDBBtn>

            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#0082ca" }}
              // href="www.google.com"
              role="button"
            >
              LinkedIn
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>

            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#333333" }}
              // href="#!"
              role="button"
            >
              GitHub
              <MDBIcon fab icon="github" />
            </MDBBtn>
          </section>
        </MDBContainer>
        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h5 className="text-uppercase fw-bold mb-4 footerName">
                  <MDBIcon icon="gem" className="me-3" />
                  Tourify : Explore. Stay. Enjoy.
                </h5>
                <p className="text-justify about">
                  Welcome to Tourify. Our project aims to streamline tourism
                  operations, enhance customer satisfaction, and provide a
                  seamless digital platform for both patrons and staff.
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Trending Cities</h6>
                <p>
                  <h6>Kedarnath</h6>
                </p>
                <p>
                  <h6>Pune</h6>
                </p>
                <p>
                  <h6>Goa</h6>
                </p>
                <p>
                  <h6>Kolkata</h6>
                </p>
              </MDBCol>

              {/* <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </MDBCol> */}

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <div className="about">
                  <p>
                    <MDBIcon icon="home" className="me-2" />
                    Pune, Maharashtra, India
                  </p>
                  <p>
                    <MDBIcon icon="envelope" className="me-3" />
                    info@tourify.com
                  </p>
                  <p>
                    <MDBIcon icon="phone" className="me-3" /> +91 7218118601
                  </p>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2024 Copyright tourify.com
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
