import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAllPropsInCity } from "../../services/properties";
import Property from "./property";
import "./propertyList.css";

const PropertyList = ({ city }) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    loadProperties();
  }, []);

  const loadProperties = async () => {
    const result = await getAllPropsInCity(city);
    console.log("PropertyListPage", city, result);
    if (result["status"] === "success") {
      setProperties(result["data"]);
    } else {
      toast.error(result["error"]);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        justifyContent: "center",
      }}
    >
      {properties.map((property) => {
        return <Property property={property} />;
      })}
    </div>
  );
};

export default PropertyList;
