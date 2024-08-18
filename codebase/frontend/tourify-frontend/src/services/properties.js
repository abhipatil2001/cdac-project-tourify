import axios from "axios";
import config from "../config";

export async function getAllPropsInCity(city) {
  let actualToken = localStorage.getItem("token");
  let finalToken = "Bearer " + actualToken;

  const payload = {
    headers: {
      Authorization: finalToken, // Assuming token is for authorization
    },
  };

  const response = await axios.get(
    `${config.url}/api/property/place/${city}`,
    payload
  );
  return response.data;
}

export async function getPropertyFromCity(placeId, id) {
  let actualToken = localStorage.getItem("token");
  let finalToken = "Bearer " + actualToken;

  const payload = {
    headers: {
      Authorization: finalToken, // Assuming token is for authorization
    },
  };

  const response = await axios.get(
    `${config.url}/api/property/propdetails/${placeId}/${id}`,
    payload
  );
  return response.data;
}
