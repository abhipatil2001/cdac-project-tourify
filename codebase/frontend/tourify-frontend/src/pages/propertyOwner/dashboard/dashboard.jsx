import React from "react";
import OwnerAfterLoginNav from "../../../components/propertyOwner/poAfterLoginNav";
import OwnerCities from "../../../components/propertyOwner/ownerCities/ownerCities";

const OwnerDashboard = () => {
  return (
    <>
      <OwnerAfterLoginNav />
      <OwnerCities />
    </>
  );
};

export default OwnerDashboard;
