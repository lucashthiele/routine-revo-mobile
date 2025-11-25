import { useMutation } from "@tanstack/react-query";
import { api } from "@/src/lib/axios";
import { tokenStorage } from "@/src/lib/tokenStorage";
import { LoginSchema } from "../schemas/loginSchema";
import { router } from "expo-router";

interface LoginResponse {
  authToken: string;
  refreshToken: string;
}

/**
 * Login Mutation Hook
 * Authenticates user with email/password and stores JWT tokens
 */
export const useLogin = () => {
  return useMutation({
    mutationFn: async (credentials: LoginSchema) => {
      const response = await api.post<LoginResponse>("/auth/login", credentials);
      return response.data;
    },
    onSuccess: async (data) => {
      // Store auth and refresh tokens in SecureStore
      await tokenStorage.saveToken(data.authToken);
      await tokenStorage.saveRefreshToken(data.refreshToken);
      
      // Navigate to the app (protected routes)
      router.replace("/(app)");
    },
    onError: (error: any) => {
      console.error("Login error:", error.response?.data || error.message);
    },
  });
};

