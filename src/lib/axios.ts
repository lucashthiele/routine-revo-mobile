import axios from "axios";
import Constants from "expo-constants";
import { tokenStorage } from "./tokenStorage";

// Get API URL from environment variable configured in app.config.js
export const API_URL =
  Constants.expoConfig?.extra?.apiUrl || "http://10.0.2.2:42069/api/v1";

export const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor: Inject Bearer token from SecureStore
api.interceptors.request.use(
  async (config) => {
    const token = await tokenStorage.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor: Handle 401 Unauthorized (optional - for token expiration)
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid - clear it
      await tokenStorage.removeToken();
      // You might want to trigger a logout/navigation here
    }
    return Promise.reject(error);
  }
);
