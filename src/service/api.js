import axios from "axios";

const http = axios.create({
  baseURL: "http://192.168.1.12:8081",
});

export default http;