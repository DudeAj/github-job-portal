import axios from 'axios';


const token = localStorage.getItem("jobToken");

const instance = axios.create(
    {
        baseURL: "http://localhost:9000",
        headers: {
            'auth-token': token
        }
    }
);

export default instance;