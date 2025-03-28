import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "1673d541e0f59b2b62b594245973770d",
    languagee: "pt-BR",
    page: 1,
  },
});

export default api;
