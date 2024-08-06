import axios from "axios";
import config from "../config";

// NOTE: for node.js backend
// export async function login(email, password) {
//   // body parameters
//   const body = {
//     email,
//     password,
//   };
//   // make API call
//   const response = await axios.post(`${config.url}/api/user/login`, body);

//   // read JSON data (response)
//   return response.data;
// }

// NOTE: for spring boot backend
export async function login(email, password) {
  // body parameters
  const body = {
    username: email,
    password,
  };
  console.log(body);

  // make API call
  const response = await axios.post(
    `http://localhost:9999/auth/api/login`,
    body
  );

  // read JSON data (response)
  console.log(response.data);

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
    role_id,
  };
  // make API call
  const response = await axios.post(`${config.url}/api/user/register`, body);

  // read JSON data (response)
  return response.data;
}

// customer's profile
export async function getProfile() {
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
