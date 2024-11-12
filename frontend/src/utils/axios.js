import axios from "axios";
import { API_BASE_URL } from "./constants";

const apiInstance = axios.create({
  baseURL: API_BASE_URL,

  timeout: 5000, // timeout after 5 seconds

  headers: {
    "Content-Type": "application/json", //sunucuya gönderilen verinin json tipinde olduğunu belirttik.
    Accept: "application/json", // sunucudan gelen cevabın JSON veri tipinde olduğunu belirttik
  },
});

export default apiInstance;

// bu kod standart bir yazım şekli sanırım pek değişmiyor.
