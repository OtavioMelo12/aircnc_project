import axios from "axios";

const api = axios.create({
  baseURL: "https://aircnc-backend1.herokuapp.com"
});

export default api;
