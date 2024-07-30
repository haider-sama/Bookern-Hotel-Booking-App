import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { useSearchContext } from "../context/SearchContext";
import { useAppContext } from "../context/AppContext";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  hotelId: string;
  pricePerNight: number;
};

type GuestInfoFormData = {
  checkIn: Date;
  checkOut: Date;
  adultCount: number;
  childCount: number;
};

const GuestInfoForm = ({ hotelId, pricePerNight }: Props) => {
  const search = useSearchContext();
  const { isLoggedIn } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    watch,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<GuestInfoFormData>({
    defaultValues: {
      checkIn: search.checkIn,
      checkOut: search.checkOut,
      adultCount: search.adultCount,
      childCount: search.childCount,
    },
  });

  const checkIn = watch("checkIn");
  const checkOut = watch("checkOut");

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);

  const onSignInClick = (data: GuestInfoFormData) => {
    search.saveSearchValues(
      "",
      data.checkIn,
      data.checkOut,
      data.adultCount,
      data.childCount
    );
    navigate("/sign-in", { state: { from: location } });
  };

  const onSubmit = (data: GuestInfoFormData) => {
    search.saveSearchValues(
      "",
      data.checkIn,
      data.checkOut,
      data.adultCount,
      data.childCount
    );
    navigate(`/hotel/${hotelId}/booking`);
  };

  return (
    <div className="flex flex-col p-4 bg-gray-200 rounded-lg gap-4">
      <h3 className="text-xl flex justify-between">
        <span>Price per night:</span>
        <span className="font-bold">${pricePerNight}</span>
      </h3>
      <form onSubmit={
          isLoggedIn ? handleSubmit(onSubmit) : handleSubmit(onSignInClick)
      }>
        <div className="grid grid-cols-1 gap-4 items-center">
          <div>
            <span>CheckIn Date:</span>
            <DatePicker
              required
              selected={checkIn}
              onChange={(date) => setValue("checkIn", date as Date)}
              selectsStart
              startDate={checkIn}
              endDate={checkOut}
              minDate={minDate}
              maxDate={maxDate}
              placeholderText="Check-in Date"
              className="min-w-full bg-white p-2 focus:outline-none rounded-lg"
              wrapperClassName="min-w-full"
            />
          </div>
          <div>
          <span>CheckOut Date:</span>
            <DatePicker
              required
              selected={checkOut}
              onChange={(date) => setValue("checkOut", date as Date)}
              selectsStart
              startDate={checkIn}
              endDate={checkOut}
              minDate={minDate}
              maxDate={maxDate}
              placeholderText="Check-in Date"
              className="min-w-full bg-white p-2 focus:outline-none rounded-lg"
              wrapperClassName="min-w-full"
            />
          </div>
          <div className="flex bg-white px-2 py-1 gap-2 rounded-lg">
            <label className="items-center flex">
              Adults:
              <input
                className="w-full p-1 focus:outline-none font-bold"
                type="number"
                min={1}
                max={20}
                {...register("adultCount", {
                  required: "This field is required",
                  min: {
                    value: 1,
                    message: "There must be at least one adult",
                  },
                  valueAsNumber: true,
                })}
              />
            </label>
            <label className="items-center flex">
              Children:
              <input
                className="w-full p-1 focus:outline-none font-bold"
                type="number"
                min={0}
                max={20}
                {...register("childCount", {
                  valueAsNumber: true,
                })}
              />
            </label>
            {errors.adultCount && (
              <span className="text-red-500 font-semibold text-sm">
                {errors.adultCount.message}
              </span>
            )}
          </div>
          {isLoggedIn ? (
            <button className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 
            focus:ring-primary-300 font-medium rounded-lg text-md px-4 lg:px-5 py-2 lg:py-2.5 
            mr-2 focus:outline-none">
              Book Now
            </button>
          ) : (
            <button className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 
            focus:ring-primary-300 font-medium rounded-lg text-md px-4 lg:px-5 py-2 lg:py-2.5 
            mr-2 focus:outline-none">
              Login to Book
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default GuestInfoForm;