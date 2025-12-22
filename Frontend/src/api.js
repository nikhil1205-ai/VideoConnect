import axios from "axios";

const prod=true;

const BASE_URL =
  prod 
    ? "https://videoconnect-qgb9.onrender.com"
    : "http://localhost:8080";

console.log(BASE_URL);
export default axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
