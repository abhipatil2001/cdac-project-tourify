import axios from "axios";
import config from "../config";

export async function ownerLogin(email, password) {
  // body parameters
  const body = {
    email,
    password,
  };
  // make API call
  const response = await axios.post(`${config.url}/api/owner/login`, body);

  // read JSON data (response)
  return response.data;
}

export async function ownerRegister(
  name,
  email,
  password,
  phone,
  address,
  role_id
) {
  // body parameters
  const body = {
    name,
    email,
    password,
    phone,
    address,
    role_id,
  };
  // make API call
  const response = await axios.post(`${config.url}/api/owner/register`, body);

  // read JSON data (response)
  return response.data;
}

// add property

export async function addProperty(
  title,
  address,
  rate,
  description,
  img,
  place_id,
  category_id,
  user_id
) {
  let actualToken = localStorage.getItem("token");

  const payload = {
    headers: {
      token: actualToken, // Assuming token is for authorization
    },
  };

  const body = {
    title,
    address,
    rate,
    description,
    img,
    place_id,
    category_id,
    user_id,
  };

  const response = await axios.post(
    `${config.url}/api/properties/add`,
    body,
    payload
  );

  return response.data;
}

// getting owner properties
export async function myProperties(poid) {
  let actualToken = localStorage.getItem("token");

  const payload = {
    headers: {
      token: actualToken,
    },
  };

  // make API call
  const response = await axios.get(
    `${config.url}/api/properties/owner/${poid}`,
    payload
  );

  return response.data;
}

// owner's profile
export async function getOwnerProfile() {
  let actualToken = localStorage.getItem("token");
  // let cust_id = localStorage.getItem("c_id");
  const payload = {
    headers: {
      token: actualToken, // Assuming token is for authorization
    },
  };

  const response = await axios.get(`${config.url}/api/user/profile`, payload);
  // console.log("data: ", response.data);
  return response.data;
}
