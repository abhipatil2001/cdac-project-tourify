import React from "react";
import PropertyList from "../../components/properties/propertyList";
import AfterLoginNavbar from "../../components/afterLoginNavbar/afterLoginNavbar";
import { useParams } from "react-router-dom";

const PropertyHome = () => {
  const { cityName } = useParams();
  // console.log("useparams: ", cityName);

  return (
    <div>
      <AfterLoginNavbar />
      <PropertyList city={cityName} />
    </div>
  );
};

export default PropertyHome;
