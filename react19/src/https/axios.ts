import axios from "axios";

export const instace = axios.create({
  // You can set your base URL or other configurations here
  baseURL: "http://localhost:5173",
  timeout: 10000,
});
