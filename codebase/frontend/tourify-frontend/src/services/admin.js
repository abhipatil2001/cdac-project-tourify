import axios from "axios";
import config from "../config";

export async function adminLogin(email, password) {
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

export async function adminRegister(
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
