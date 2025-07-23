import axios from "axios";


axios.defaults.withCredentials =
  process.env.NODE_ENV == "development" ? true : false;
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL + "/api/1.0",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
  },
});


apiClient.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    console.log(error);
  }
);

export default apiClient;
