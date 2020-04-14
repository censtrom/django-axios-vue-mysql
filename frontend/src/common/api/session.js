import axios from "axios";

const baseDomain = `http://127.0.0.1:8000`;
const apiUrl = `/api/v1/`;
const token = localStorage.getItem("token");
const session = axios.create({
  baseURL: `${baseDomain}${apiUrl}`,
  Authorization: token
});

export default session;
