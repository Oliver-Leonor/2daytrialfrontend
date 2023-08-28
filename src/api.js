import axios from 'axios';

const API_URL = 'http://localhost:4000';

export const fetchProfile = async (id) => {
    try {
        const response =  await axios.get(`${API_URL}/get-profile/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching profile', error);
    }
};
