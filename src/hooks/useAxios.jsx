import axios from "axios";

const axiosInstance = axios.create({
    baseURL: `https://server-portfolio-ebon.vercel.app/`, // Adjust the base URL as needed
})

const useAxios = () => {
    return axiosInstance;
};

export default useAxios;
