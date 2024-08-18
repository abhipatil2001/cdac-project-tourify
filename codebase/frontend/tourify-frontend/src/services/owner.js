import axios from "axios";
import config from "../config";

export async function ownerLogin(email, password) {
  // body parameters
  const body = {
    username: email,
    password,
  };
  // make API call
  const response = await axios.post(`${config.url}/auth/api/login`, body);

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
    roleId: role_id,
  };
  // make API call
  const response = await axios.post(`${config.url}/auth/api/register`, body);

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
  let finalToken = "Bearer " + actualToken;

  const payload = {
    headers: {
      Authorization: finalToken, // Assuming token is for authorization
    },
  };
  const body = {
    title,
    address,
    rate,
    description,
    img,
    placeId: place_id,
    categoryId: category_id,
    userId: user_id,
  };

  const response = await axios.post(
    `${config.url}/api/property/add`,
    body,
    payload
  );

  return response.data;
}

// getting owner properties
export async function myProperties(poid) {
  let actualToken = localStorage.getItem("token");
  let finalToken = "Bearer " + actualToken;

  let p_id = localStorage.getItem("po_id");
  const payload = {
    headers: {
      Authorization: finalToken, // Assuming token is for authorization
    },
  };

  // make API call
  const response = await axios.get(
    `${config.url}/api/property/owner/${p_id}`,
    payload
  );

  return response.data;
}

// owner's profile
export async function getOwnerProfile() {
  let actualToken = localStorage.getItem("token");
  let finalToken = "Bearer " + actualToken;

  let p_id = localStorage.getItem("po_id");
  const payload = {
    headers: {
      Authorization: finalToken, // Assuming token is for authorization
    },
  };

  const response = await axios.get(
    `${config.url}/api/user/get/${p_id}`,
    payload
  );
  // console.log("data: ", response.data);
  return response.data;
}
