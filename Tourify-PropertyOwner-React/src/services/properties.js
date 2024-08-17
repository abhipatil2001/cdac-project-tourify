import axios from 'axios';
import config from "../config";

export async function addprop({ title, address, description, place_id, category_id, rate }) {
    const body = {
        title,
        address,
        description,
        place_id,
        category_id,
        rate,
        user_id: sessionStorage.getItem('ownerId')
    };
    
    const response = await axios.post(`${config.url}/propertyOwner/addProperty`, body, {
        headers: {
            token: sessionStorage.getItem('token'),
        }
    });
    
    return response;
}
