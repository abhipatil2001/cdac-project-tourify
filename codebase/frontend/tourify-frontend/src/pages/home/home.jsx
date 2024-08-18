import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAllCities } from "../../services/other";
import City from "./city";
import { useNavigate } from "react-router-dom";
import CustomNavBar from "../../components/afterLoginNavbar/afterLoginNavbar";
import Carousel from "../../components/carousel/carousel";
import BeforeLoginNavbar from "../../components/beforeLoginNavbar/beforeLoginNavbar";
import { Button, Container } from "reactstrap";
import "./home.css";

function Home() {
  const [cities, setCities] = useState([]);

  const navigate = useNavigate();

  // useEffect(() => {
  //   loadCities();
  // }, []);

  // const loadCities = async () => {
  //   const result = await getAllCities();

  //   if (result["status"] === "success") {
  //     toast.success("got the data");
  //     // console.log(result.data);
  //     setCities(result.data);
  //     console.log(cities);
  //   }
  // };

  return (
    <div>
      {/* <CustomNavBar /> */}
      {/* <BeforeLoginNavbar /> */}
      {/* <div>
        <nav class="navbar navbar-info bg-light  ">
          <div className="heading">
            <div class="container-fluid ">
              <span>
                <h1 className="mt-2 mb-2 myH1 " class="markee">
                  Welcome To Tourify
                </h1>
                <marquee
                  behavior="scroll"
                  direction="left"
                  scrollamount="7"
                  class="markee1"
                >
                  Explore. Stay. Enjoy. !!
                </marquee>
              </span>
            </div>
            <div className="loginBtn">
              <Button
                onClick={() => {
                  navigate("/signup");
                }}
                className="myBtn"
              >
                Login / SignUp
              </Button>
            </div>
          </div>
        </nav>
      </div> */}

      <BeforeLoginNavbar />
      <div>
        <Carousel />
      </div>
    </div>
  );
}

export default Home;

{
  /* <div>
        {cities.map((city) => {
          return <City name={city.name} />;
        })}
      </div> */
}
