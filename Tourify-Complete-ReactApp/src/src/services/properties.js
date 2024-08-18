import axios from 'axios';
import config from "../config";

export async function addProp({
    title,
    address,
    rate,
    description,
    img,
    place_id,
    category_id,
    user_id
  }
  ) {
    let actualToken = localStorage.getItem("token");
    let finalToken = "Bearer " + actualToken;
  
    const payload = {
      headers: {
        Authorization: finalToken,
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

    console.log(body); // Log the correctly formatted body
    
    const response = await axios.post(
      `${config.url}/api/property/add`,
      body,
      payload
    );
  
    return response;
  }
