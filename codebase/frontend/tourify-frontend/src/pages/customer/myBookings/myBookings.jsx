import React, { useEffect, useState } from "react";
import AfterLoginNavbar from "../../../components/afterLoginNavbar/afterLoginNavbar";
import "./myBookings.css";
import { getAllBookings } from "../../../services/booking";
import { toast } from "react-toastify";
import SingleBooking from "../../../components/mySingleBooking/singleBooking";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    const result = await getAllBookings();
    if (result["status"] === "success") {
      setBookings(result["data"]);
      //   toast.success("got the bookings");
    } else toast.error("Unable to get bookings");
  };

  return (
    <>
      <AfterLoginNavbar />
      <div>
        <div className="myDiv">
          {bookings.map((booking) => {
            return <SingleBooking booking={booking} />;
          })}
        </div>
      </div>
    </>
  );
};

export default MyBookings;
