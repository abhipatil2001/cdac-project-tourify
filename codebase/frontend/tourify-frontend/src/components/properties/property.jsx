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
    <div>
      <MDBRow className="row-cols-1 row-cols-md-3 g-4 myCards">
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              className="myCardImg"
              src={property.img}
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>{property.title}</MDBCardTitle>
              <MDBCardText className="myCardText">
                {property.description}
              </MDBCardText>
              <MDBCardText>
                <small className="text-muted">
                  Rate: ₹{property.rate}/night
                </small>
              </MDBCardText>
              <div>
                <Button
                  color="dark"
                  outline
                  onClick={() => {
                    // navigate("/customer/propertydetails");
                    navigate(
                      `/customer/propertydetails/${property.name}/${property.id}`
                    );
                  }}
                >
                  More Details
                </Button>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Property;
