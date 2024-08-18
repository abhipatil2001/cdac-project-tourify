import axios from "axios";
import config from "../config";

// NOTE: for spring boot backend
export async function login(email, password) {
  // body parameters
  const body = {
    username: email,
    password,
  };
  // console.log(body);

  // make API call
  const response = await axios.post(`${config.url}/auth/api/login`, body);

  return response.data;
}

export async function register(name, email, password, phone, address, role_id) {
  // body parameters
  const body = {
    name,
    email,
    password,
    phone,
    address,
    roleId: role_id,
  };
  // make API call
  const response = await axios.post(`${config.url}/auth/api/register`, body);

  // read JSON data (response)
  return response.data;
}

// customer's profile
export async function getProfile() {
  let actualToken = localStorage.getItem("token");
  let finalToken = "Bearer " + actualToken;
  // console.log("finaltoken: " + finalToken);

  let cust_id = localStorage.getItem("c_id");
  const payload = {
    headers: {
      Authorization: finalToken, // Assuming token is for authorization
    },
  };

  const response = await axios.get(
    `${config.url}/api/user/get/${cust_id}`,
    payload
  );
  console.log("received data: " + response.data);
  return response.data;
}
