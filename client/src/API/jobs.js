import axios from 'axios';
const url="http://localhost:8080"

export const fetchJobs = async () => {
    try {
        const response = await axios.get(`${url}/jobs/list`); 
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};  