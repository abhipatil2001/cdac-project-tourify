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
import "./property.css";

const Property = ({ property }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        maxWidth: "400px",
        minHeight: "600px",
        margin: "20px",
      }}
    >
      {/* <MDBRow className="row-cols-1 row-cols-md-3 g-4"> */}
      <MDBCol>
        <MDBCard
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          className="h-100"
        >
          <MDBCardImage
            className="myCardImg"
            src={property.img}
            alt="..."
            position="top"
          />
          <MDBCardBody>
            <MDBCardTitle>{property.title}</MDBCardTitle>
            <MDBCardText
              style={{
                // width: "300px",
                height: "100px",
                whiteSpace: "wrap",
                overflow: "clip",
                textOverflow: "ellipsis",
              }}
              className="myCardText"
            >
              {property.description}
            </MDBCardText>
            <MDBCardText>
              <small className="text-muted">Rate: ₹{property.rate}/night</small>
            </MDBCardText>
            <div>
              <Button
                color="dark"
                outline
                onClick={() => {
                  // navigate("/customer/propertydetails");
                  navigate(
                    `/customer/propertydetails/${property.placeId}/${property.id}`
                  );
                }}
              >
                More Details
              </Button>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      {/* </MDBRow> */}
    </div>
  );
};

export default Property;
