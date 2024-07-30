import { Link } from "react-router-dom";
import { HotelType } from "../../../backend/src/shared/types";

type Props = {
  hotel: HotelType;
};

const LatestDestinationCard = ({ hotel }: Props) => {
  return (
    <Link to={`/detail/${hotel._id}`}
    className="relative cursor-pointer shadow-md border-2 border-slate-200 overflow-hidden rounded-md max-h-[400px] max-w-[400px]">
      <div className="bg-white">
      <div className="h-[300px] w-[400px]">
        <img
          src={hotel.imageUrls[0]}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="absolute bottom-0 p-4 bg-white w-full rounded-b-md">
        <div className="text-slate-900 font-semibold tracking-tight text-base mb-1">
          {hotel.name}
        </div>
        <div className="text-slate-600 font-semibold tracking-tight text-base">
          {hotel.city}, {hotel.country}
        </div>
        <div className="text-slate-900 font-semibold tracking-tight text-base">
          ${hotel.pricePerNight} {""}
          <span className="text-slate-600">night</span>
        </div>
      </div>
      
    </div>
    </Link>
  );
};

export default LatestDestinationCard;