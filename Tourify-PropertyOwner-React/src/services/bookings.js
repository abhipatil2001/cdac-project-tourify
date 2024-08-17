import axios from "axios";
import config from "../config";

export async function bookings({ userId, token }) {
    try {
        const response = await axios.get(`${config.url}/propertyOwner/bookings/${userId}`, {
            headers: {
                'token': `${token}`
            }
        });
        return response.data; // Return the data part directly
    } catch (error) {
        console.error("Error fetching bookings:", error);
        return { status: 'error', message: 'Unable to fetch bookings' }; // Return error message
    }
}

