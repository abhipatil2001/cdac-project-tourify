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
import "./cities.css";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const Cities = () => {
  const navigate = useNavigate();
  return (
    <MDBRow className="row-cols-1 row-cols-md-3 g-4 myCards">
      <MDBCol>
        <MDBCard className="h-100">
          <MDBCardImage
            src="https://c4.wallpaperflare.com/wallpaper/366/175/816/taj-mahal-agra-india-mausoleum-wallpaper-preview.jpg"
            alt="..."
            position="top"
            className="myCardImg"
          />
          <MDBCardBody>
            <MDBCardTitle>Agra (UP)</MDBCardTitle>
            <MDBCardText className="myCardText">
              Agra is a city in the northern Indian state of Uttar Pradesh,
              located on the banks of the Yamuna river. It's a major tourist
              destination and one of the most populated cities in Uttar Pradesh
              and India. Agra is known for its many Mughal-era buildings,
              including the Taj Mahal, Agra Fort, etc.
            </MDBCardText>
            <div>
              <Button
                color="dark"
                outline
                onClick={() => {
                  navigate(`/customer/properties/${"5"}`);
                }}
              >
                Let's Visit
              </Button>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className="h-100">
          <MDBCardImage
            src="https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFqYXN0aGFufGVufDB8fDB8fHww"
            alt="..."
            position="top"
            className="myCardImg"
          />
          <MDBCardBody>
            <MDBCardTitle>Jaipur (Rajasthan)</MDBCardTitle>
            <MDBCardText>
              Jaipur became known as “The Pink City” when, in 1876, Maharaja Ram
              Singh had most of the buildings painted pink—the color of
              hospitality—in preparation for a visit by Britain's Queen
              Victoria. Today, the city is known for its bazaars, forts,
              temples, palaces, and wildlife sanctuaries.
            </MDBCardText>
            <div>
              <Button
                color="dark"
                outline
                onClick={() => {
                  navigate(`/customer/properties/${"6"}`);
                }}
              >
                Let's Visit
              </Button>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className="h-100">
          <MDBCardImage
            src="https://c4.wallpaperflare.com/wallpaper/858/348/52/kettuvallam-houseboat-kerala-india-wallpaper-preview.jpg"
            alt="..."
            position="top"
            className="myCardImg"
          />
          <MDBCardBody>
            <MDBCardTitle>Alleppey (Kerala)</MDBCardTitle>
            <MDBCardText>
              Alappuzha (or Alleppey) is a city on the Laccadive Sea in the
              southern Indian state of Kerala. It's best known for houseboat
              cruises along the rustic Kerala backwaters, a network of tranquil
              canals and lagoons. Alappuzha Beach is the site of the
              19th-century Alappuzha Lighthouse.
            </MDBCardText>
            <div>
              <Button
                color="dark"
                outline
                onClick={() => {
                  navigate(`/customer/properties/${"7"}`);
                }}
              >
                Let's Visit
              </Button>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className="h-100">
          <MDBCardImage
            src="https://i.guim.co.uk/img/media/60927ba3b5be3fd9939ae3a0941764bd15050c11/596_292_1004_602/master/1004.jpg?width=465&dpr=1&s=none"
            alt="..."
            position="top"
            className="myCardImg"
          />
          <MDBCardBody>
            <MDBCardTitle>Lakshadweep (Union territory)</MDBCardTitle>
            <MDBCardText>
              Lakshadweep is a tropical archipelago of 36 atolls and coral reefs
              in the Laccadive Sea, off the coast of Kerala, India. It is the
              group of 36 islands is known for its exotic and sun-kissed beaches
              and lush green landscape. The name Lakshadweep in Malayalam and
              Sanskrit means 'a hundred thousand islands'.
            </MDBCardText>
            <div>
              <Button
                color="dark"
                outline
                onClick={() => {
                  navigate(`/customer/properties/${"8"}`);
                }}
              >
                Let's Visit
              </Button>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className="h-100">
          <MDBCardImage
            src="https://traveltriangle.com/blog/wp-content/uploads/2016/07/Untitled-design-111.jpg"
            alt="..."
            position="top"
            className="myCardImg"
          />
          <MDBCardBody>
            <MDBCardTitle>Gangtok (Sikkim) </MDBCardTitle>
            <MDBCardText>
              It has an amazing view of mount Kanchenjunga, the third highest
              mountain peak in the world. Also like everything around it,
              Gangtok is abundant in natural beauty and has various natural
              attractions such as the Tsomgo Lake, Ban Jhakri falls, Tashi
              viewpoint and more.
            </MDBCardText>
            <div>
              <Button
                color="dark"
                outline
                onClick={() => {
                  navigate(`/customer/properties/${"9"}`);
                }}
              >
                Let's Visit
              </Button>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className="h-100">
          <MDBCardImage
            src="https://t3.ftcdn.net/jpg/04/37/91/72/360_F_437917209_fZPcDkpnEpZJ2oWFpNbqYATQ39UJFcZl.jpg"
            alt="..."
            position="top"
            className="myCardImg"
          />
          <MDBCardBody>
            <MDBCardTitle>Jammu and Kashmir (Union Territory)</MDBCardTitle>
            <MDBCardText>
              Kashmir is often called “Paradise on Earth” due to its
              breathtaking pristine. The region is blessed with lush green
              valleys, snow-capped mountains, beautiful lakes, & picturesque
              landscapes that evoke a sense of paradise, making it a popular
              epithet for Kashmir.
            </MDBCardText>
            <div>
              <Button
                color="dark"
                outline
                onClick={() => {
                  navigate(`/customer/properties/${"10"}`);
                }}
              >
                Let's Visit
              </Button>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};

export default Cities;
