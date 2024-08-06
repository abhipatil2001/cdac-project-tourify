import React, { useEffect, useState } from "react";
import AfterLoginNavbar from "../../../components/afterLoginNavbar/afterLoginNavbar";
import { getPropertyFromCity } from "../../../services/properties";
import { toast } from "react-toastify";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
import "./propertyDetails.css";
import { Button } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import "./propertyDetails.css";

const PropertyDetails = () => {
  const [property, setProperty] = useState();
  const navigate = useNavigate();

  const { city, id } = useParams();

  useEffect(() => {
    loadProperty();
  }, []);

  const loadProperty = async () => {
    const result = await getPropertyFromCity(city, id);
    console.log("propertydetails page: ", city, id);
    if (result["status"] === "success" && result.data.length === 1) {
      setProperty(result["data"][0]);
      localStorage.setItem("p_id", result["data"][0].id);
      localStorage.setItem("p_rate", result["data"][0].rate);
    } else {
      toast.error(result["error"]);
    }
  };

  return (
    <>
      <AfterLoginNavbar />

      {/* <center>
        <h1>This is property Details page</h1>
      </center>
      {property?.title} */}

      <center>
        <div className="myDiv">
          <MDBCard className="mb-3">
            <MDBCardImage
              className="myImg"
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
              <div>
                <Button
                  color="dark"
                  outline
                  onClick={() => {
                    navigate("/customer/booking");
                  }}
                >
                  Book Now
                </Button>
              </div>
            </MDBCardBody>
          </MDBCard>
        </div>
      </center>
    </>
  );
};

export default PropertyDetails;
