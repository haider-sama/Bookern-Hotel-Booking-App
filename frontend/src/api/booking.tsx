import { HotelType } from "../../../backend/src/shared/types";
import { BookingFormData } from "../forms/BookingForm";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || "";

export const createRoomBooking = async (formData: BookingFormData) => {
    const response = await fetch(
      `${API_BASE_URL}/api/hotels/${formData.hotelId}/bookings`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      }
    );
  
    if (!response.ok) {
      throw new Error("Error booking room");
    }
};
  
export const fetchMyBookings = async (): Promise<HotelType[]> => {
    const response = await fetch(`${API_BASE_URL}/api/my-bookings`, {
      credentials: "include",
    });
  
    if (!response.ok) {
      throw new Error("Unable to fetch bookings");
    }
  
    return response.json();
};