import React from "react";

const City = (props) => {

    const {name} = props;

  return (
    <div className="ms-4" style={{display:  "inline-block"}}>
      <div  style={{ fontWeight: "600", fontSize: 15 }}>{name}</div>
      <br /><br />
    </div>
  );
};

export default City;
