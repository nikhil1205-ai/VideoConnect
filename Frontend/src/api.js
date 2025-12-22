import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === "production"
    ? "https://videoconnect-qgb9.onrender.com"
    : "http://localhost:8080";

export default axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
