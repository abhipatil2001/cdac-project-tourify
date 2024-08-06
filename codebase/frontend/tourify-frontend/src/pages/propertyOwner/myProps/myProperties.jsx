import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { myProperties } from "../../../services/owner";
import OwnerAfterLoginNav from "../../../components/propertyOwner/poAfterLoginNav";
import "./myProperties.css";
import Property from "../../../components/properties/property";
import DisplayOwnerProps from "../../../components/propertyOwner/ownerProperties/displayOwnerProps";
const MyProperties = () => {
  const [poid, setPoid] = useState(localStorage.getItem("po_id"));
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    loadMyProperties();
  }, []);

  const loadMyProperties = async () => {
    const result = await myProperties(poid);

    if (result["status"] === "success") {
      // toast.success("Got the props");
      setProperties(result["data"]);
    } else {
      toast.error("Unable to get the props.");
    }
  };

  return (
    <>
      <OwnerAfterLoginNav />

      <div>
        {properties.map((property) => {
          return <DisplayOwnerProps property={property} />;
        })}
      </div>
    </>
  );
};

export default MyProperties;
