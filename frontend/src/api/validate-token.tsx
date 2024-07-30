const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || "";

export const validateToken = async () => {
    const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
      credentials: "include",
    });
  
    if (!response.ok) {
      throw new Error("Invalid Token.");
    }
  
    return response.json();
};