import { HotelType } from "../../../backend/src/shared/types";

type Props = {
  checkIn: Date;
  checkOut: Date;
  adultCount: number;
  childCount: number;
  numberOfNights: number;
  hotel: HotelType;
};

const BookingSummary = ({
  checkIn,
  checkOut,
  adultCount,
  childCount,
  numberOfNights,
  hotel,
}: Props) => {
  return (

  <div className="grid gap-4 rounded-lg border border-slate-300 p-6 h-fit mb-8">
    <h2 className="text-xl font-bold text-center">Your Booking Details</h2>
    <div className="border-b py-2">
      Location:
      <div className="font-semibold">{`${hotel.name}, ${hotel.city}, ${hotel.country}`}</div>
    </div>
    <div className="flex justify-between">
      <div className="mr-4">
        Check-in
        <div className="font-semibold">{checkIn.toDateString()}</div>
      </div>
      <div>
        Check-out
        <div className="font-semibold">{checkOut.toDateString()}</div>
      </div>
    </div>
    <div className="border-t border-b py-2">
      Total length of stay:
      <div className="font-bold">{numberOfNights} nights</div>
    </div>
    <div>
      Guests{" "}
      <div className="font-semibold">
        {adultCount} adults & {childCount} children
      </div>
    </div>
  </div>

  );
};

export default BookingSummary;