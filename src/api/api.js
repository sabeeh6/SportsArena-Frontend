import axios from "axios";

const api = axios.create({
  baseURL: "https://tournament-backend-ruddy.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
