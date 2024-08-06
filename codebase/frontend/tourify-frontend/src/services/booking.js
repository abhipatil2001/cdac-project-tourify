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

  const payload = {
    headers: {
      token: actualToken, // Assuming token is for authorization
    },
  };

  const body = {
    from_date,
    to_date,
    user_id,
    property_id,
    bill,
  };

  const response = await axios.post(
    `${config.url}/api/property/book`,
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
  let cust_id = localStorage.getItem("c_id");
  const payload = {
    headers: {
      token: actualToken, // Assuming token is for authorization
    },
  };

  const response = await axios.get(
    `${config.url}/api/property/bookings/${cust_id}`,
    payload
  );
  // console.log("data: ", response.data);
  return response.data;
}
