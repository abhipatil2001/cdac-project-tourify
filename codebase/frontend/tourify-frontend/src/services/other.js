import axios from "axios";
import config from "../config";

export async function getAllCities() {
  let actualToken = localStorage.getItem("token");

  const payload = {
    headers: {
      token: actualToken, // Assuming token is for authorization
    },
  };

  const response = await axios.get(`${config.url}/api/place/all`, payload);
  return response.data;
}
