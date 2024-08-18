import axios from "axios";
import config from "../config";

export async function letsBookIt(
  from_date,
  to_date,
  user_id,
  property_id,
  bill
) {
  let actualToken = localStorage.getItem("token");
  let finalToken = "Bearer " + actualToken;
  const payload = {
    headers: {
      Authorization: finalToken, // Assuming token is for authorization
    },
  };

  const body = {
    fromDate: from_date,
    toDate: to_date,
    bill,
    userId: user_id,
    propertyId: property_id,
    statusId: 201,
  };

  const response = await axios.post(
    `${config.url}/api/user/property/book`,
    body,
    payload
  );

  // NOTE: sequence of parameter matters (Should Be: URL, BODY, PAYLOAD)
  //   const response = await axios.post(
  //     `${config.url}/api/booking/property`,
  //     payload,
  //     body
  //   );

  return response.data;
}

// customer's bookings
export async function getAllBookings() {
  let actualToken = localStorage.getItem("token");
  let finalToken = "Bearer " + actualToken;
  // console.log("finaltoken: " + finalToken);

  let cust_id = localStorage.getItem("c_id");
  // let cust_id = 3;
  const payload = {
    headers: {
      Authorization: finalToken, // Assuming token is for authorization
    },
  };
  const response = await axios.get(
    `${config.url}/api/user/mybookings/${cust_id}`,
    payload
  );
  console.log("data: ", response.data);
  return response.data;
}
