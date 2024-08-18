import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAllCities } from "../../services/other";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import "./signUpCard.css";
import { useNavigate } from "react-router-dom";
import City from "../home/city";
import CustomNavBar from "../../components/afterLoginNavbar/afterLoginNavbar";
import BeforeLoginNavbar from "../../components/beforeLoginNavbar/beforeLoginNavbar";
import BeforeLoginNavWithoutLoginBtn from "../../components/beforeLoginNavWithoutLoginBtn/beforeLoginNavWithoutLoginBtn";

function SignUpCard() {
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();
  const flag = false;

  // useEffect(() => {
  //   loadCities();
  // }, []);

  // const loadCities = async () => {
  //   const result = await getAllCities();

  //   if (result["status"] === "success") {
  //     toast.success("got the data");
  //     // console.log(result.data);
  //     setCities(result.data);
  //     console.log("cities");
  //     console.log(cities);
  //   }
  // };

  const customerLogin = () => {
    navigate("/customer/login");
  };

  const customerRegister = () => {
    navigate("/customer/register");
  };

  const ownerLogin = () => {
    navigate("/owner/login");
  };

  const ownerRegister = () => {
    navigate("/owner/register");
  };

  const adminLogin = () => {
    navigate("/admin/login");
  };
  return (
    <div>
      <BeforeLoginNavWithoutLoginBtn />
      <div>
        {cities.map((city) => {
          return <City name={city.name} />;
        })}
      </div>

      <br />
      <div>
        <CardGroup>
          <Card className="ms-5">
            <CardImg
              class="cardImg"
              alt="Card image cap"
              // src="https://cdn-icons-png.flaticon.com/512/1478/1478890.png"
              src={require("./customer.png")}
              top
            />
            <CardBody>
              <CardTitle tag="h5">Customer</CardTitle>
              {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle> */}
              {/* <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText> */}
              <Button color="info" onClick={customerRegister}>
                Register
              </Button>
              <Button color="success" className="ms-2" onClick={customerLogin}>
                Login
              </Button>
            </CardBody>
          </Card>

          <Card className="ms-5">
            <CardImg
              alt="Card image cap"
              // src="https://cdn4.vectorstock.com/i/1000x1000/25/03/manager-hotel-employee-service-vector-10522503.jpg"
              src={require("./hotelOwner.jpg")}
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">Property Owner</CardTitle>
              <Button color="info" onClick={ownerRegister}>
                Register
              </Button>
              <Button color="success" className="ms-2" onClick={ownerLogin}>
                Login
              </Button>
            </CardBody>
          </Card>

          <Card className="ms-5 me-5">
            <CardImg
              alt="Card image cap"
              // src="https://i.pinimg.com/originals/6a/44/f0/6a44f0e35b10e6ed063eeebf7ed844f9.jpg"
              src={require("./admin.jpg")}
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">Admin</CardTitle>
              <Button color="success" className="ms-2" onClick={adminLogin}>
                Login
              </Button>
            </CardBody>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}

export default SignUpCard;
