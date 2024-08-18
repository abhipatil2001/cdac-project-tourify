import axios from "axios";
import config from "../../config";

export async function bookings({ userId, finalToken }) {

    try {
        const response = await axios.get(`${config.url}/api/user/ownerprops/bookings/${userId}`, {
            headers: {
                Authorization: finalToken
            }
        });
        return response.data; // Return the data part directly
    } catch (error) {
        console.error("Error fetching bookings:", error);
        return { status: 'error', message: 'Unable to fetch bookings' }; // Return error message
    }
}

