import { RegisterFormData } from "../pages/Register";
import { SignInFormData } from "../pages/Login";
import { UserType } from "../../../backend/src/shared/types";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || "";

export const fetchCurrentUser = async (): Promise<UserType> => {
    const response = await fetch(`${API_BASE_URL}/api/users/me`, {
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("Error fetching user");
    }
    return response.json();
};

export const register = async (formData: RegisterFormData) => {
    const response = await fetch(`${API_BASE_URL}/api/users/register`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  
    const responseBody = await response.json();
  
    if (!response.ok) {
      throw new Error(responseBody.message);
    }
  };
  
export const signIn = async (formData: SignInFormData) => {
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  
    const body = await response.json();
    if (!response.ok) {
      throw new Error(body.message);
    }
    return body;
};

export const signOut = async () => {
    const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
      credentials: "include",
      method: "POST",
    });
  
    if (!response.ok) {
      throw new Error("Error while signing out");
    }
};