import { PaymentIntentResponse } from "../../../backend/src/shared/types";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || "";

export const createPaymentIntent = async (
    hotelId: string,
    numberOfNights: string
): Promise<PaymentIntentResponse> => {
    const response = await fetch(
      `${API_BASE_URL}/api/hotels/${hotelId}/bookings/payment-intent`,
      {
        credentials: "include",
        method: "POST",
        body: JSON.stringify({ numberOfNights }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  
    if (!response.ok) {
      throw new Error("Error fetching payment intent");
    }
  
    return response.json();
};