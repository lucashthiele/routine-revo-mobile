import axios from "axios";
import Constants from "expo-constants";

// Get API URL from environment variable configured in app.config.js
export const API_URL =
  Constants.expoConfig?.extra?.apiUrl || "http://10.0.2.2:8080/api/v1";

export const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
