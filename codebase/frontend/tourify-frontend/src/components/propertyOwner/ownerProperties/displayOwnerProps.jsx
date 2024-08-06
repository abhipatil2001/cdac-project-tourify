import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "./displayOwnerProps.css";

const DisplayOwnerProps = ({ property }) => {
  const navigate = useNavigate();

  return (
    <MDBRow className="row-cols-1 row-cols-md-3 g-4 myCards1">
      <MDBCol>
        <MDBCard className="h-100">
          <MDBCardImage
            className="myCardImg"
            position="top"
            src={property?.img}
            alt="..."
          />
          <MDBCardBody className="details">
            <MDBCardTitle>
              <h5>Name:</h5> {property?.title}
              <br />
              <br />
            </MDBCardTitle>
            <MDBCardText>
              <h5>Description:</h5> {property?.description}
            </MDBCardText>
            <MDBCardText>
              <h5>Address:</h5> {property?.address}
            </MDBCardText>
            <MDBCardText>
              <h5>Rate:</h5> ₹{property?.rate}/night
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};

export default DisplayOwnerProps;
