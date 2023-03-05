import axios from "axios";

const api = axios.create({
  baseURL: "https://www.imdb.com",
});

api.interceptors.request.use(async (config) => {
  const token = "AKIAYE35ABDJPUELNZ7A";
  if (token) {
    api.defaults.headers.authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
