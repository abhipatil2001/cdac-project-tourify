import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { differenceInDays, format } from "date-fns";
import "./propertyBooking.css";
import AfterLoginNavbar from "../../components/afterLoginNavbar/afterLoginNavbar";
import { Button } from "reactstrap";
import { toast } from "react-toastify";
import { letsBookIt } from "../../services/booking";
import { useNavigate } from "react-router-dom";

function PropertyBooking() {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [days, setDays] = useState(0);
  const [bill, setBill] = useState(0);
  const userId = localStorage.getItem("c_id");
  const propertyId = localStorage.getItem("p_id");

  const navigate = useNavigate();

  const handleFromDateChange = (dateToFormat) => {
    const formatedDate = formatDate(dateToFormat);
    setFromDate(formatedDate);
  };

  const handleToDateChange = (dateToFormat) => {
    const formatedDate = formatDate(dateToFormat);
    setToDate(formatedDate);
  };

  const formatDate = (date) => {
    return date ? format(date, "yyyy-MM-dd") : "";
  };

  const bookProperty = async () => {
    const result = await letsBookIt(fromDate, toDate, userId, propertyId, bill);
    if (result["status"] === "success") {
      toast.success("Booking successfull.");
      navigate("/customer/mybookings");
    } else {
      toast.error("Unable to book.");
    }
  };

  useEffect(() => {
    if (fromDate && toDate) {
      console.log("Fromdate", fromDate);
      console.log("todate", toDate);
      const diffDays = differenceInDays(toDate, fromDate);
      setDays(diffDays);
      setBill(diffDays * localStorage.getItem("p_rate"));
    }
  }, [fromDate, toDate]);

  return (
    <>
      <AfterLoginNavbar />
      <br />
      <br />
      <div className="myContainer">
        <h1>Property Booking</h1>
        <div className="input-group">
          <label>From Date</label>
          <DatePicker
            selected={fromDate}
            onChange={handleFromDateChange}
            dateFormat="yyyy-MM-dd"
            placeholderText="Select a start date"
          />
        </div>
        <div className="input-group">
          <label>To Date</label>
          <DatePicker
            selected={toDate}
            onChange={handleToDateChange}
            dateFormat="yyyy-MM-dd"
            placeholderText="Select an end date"
          />
        </div>
        <div className="input-group">
          <label>Number of Days</label>
          <input type="text" value={days} readOnly />
        </div>
        <div className="input-group">
          <label>Bill (INR)</label>
          <input type="text" value={bill} readOnly />
        </div>
        <div>
          <center>
            <Button color="dark" outline onClick={bookProperty}>
              Let's Book It
            </Button>
          </center>
        </div>
      </div>
    </>
  );
}

export default PropertyBooking;
