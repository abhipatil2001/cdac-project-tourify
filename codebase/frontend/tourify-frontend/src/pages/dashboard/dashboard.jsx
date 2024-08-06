import React from "react";
import AfterLoginNavbar from "../../components/afterLoginNavbar/afterLoginNavbar";
import Cities from "../../components/cities/cities";

const Dashboard = () => {
  return (
    <div>
      <AfterLoginNavbar />
      <Cities />
    </div>
  );
};

export default Dashboard;
