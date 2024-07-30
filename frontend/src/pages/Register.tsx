import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api/authentication";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  city: string;
  country: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { showToast } = useAppContext();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const mutation = useMutation(apiClient.register, {
    onSuccess: async () => {
      showToast({ message: "Registration Success!", type: "SUCCESS" });
      await queryClient.invalidateQueries("validateToken");
      navigate("/");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <div className="flex justify-center">
    <form className="flex flex-col gap-5 border-2 rounded-lg p-12 shadow-md my-12 max-w-2xl" 
    onSubmit={onSubmit}>
      <h2 className="text-3xl text-center font-bold">Create an Account</h2>
      <div className="flex flex-col md:flex-row gap-5 max-w-[600px]">
        <label className="text-gray-800 text-sm font-bold flex-1">
          First Name
          <input
            className="border rounded w-full py-2 px-2 font-normal"
            {...register("firstName", { required: "This field is required" })}
          ></input>
          {errors.firstName && (
            <span className="text-red-500">{errors.firstName.message}</span>
          )}
        </label>
        <label className="text-gray-800 text-sm font-bold flex-1">
          Last Name
          <input
            className="border rounded w-full py-2 px-2 font-normal"
            {...register("lastName", { required: "This field is required" })}
          ></input>
          {errors.lastName && (
            <span className="text-red-500">{errors.lastName.message}</span>
          )}
        </label>
        </div>
        <div className="flex flex-col md:flex-row gap-5 max-w-[600px]">
        <label className="text-gray-800 text-sm font-bold flex-1">
          City
          <input
            className="border rounded w-full py-2 px-2 font-normal"
            {...register("city", { required: "This field is required" })}
          ></input>
          {errors.city && (
            <span className="text-red-500">{errors.city.message}</span>
          )}
        </label>
        <label className="text-gray-800 text-sm font-bold flex-1">
          Country
          <input
            className="border rounded w-full py-2 px-2 font-normal"
            {...register("country", { required: "This field is required" })}
          ></input>
          {errors.country && (
            <span className="text-red-500">{errors.country.message}</span>
          )}
        </label>
      </div>
      <label className="text-gray-800 text-sm font-bold flex-1">
        Email
        <input
          type="email"
          className="border rounded w-full py-2 px-2 font-normal"
          {...register("email", { required: "This field is required" })}
        ></input>
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </label>
      <label className="text-gray-800 text-sm font-bold flex-1">
        Password
        <input
          type="password"
          className="border rounded w-full py-2 px-2 font-normal"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        ></input>
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </label>
      <label className="text-gray-800 text-sm font-bold flex-1 mb-4">
        Confirm Password
        <input
          type="password"
          className="border rounded w-full py-2 px-2 font-normal"
          {...register("confirmPassword", {
            validate: (val) => {
              if (!val) {
                return "This field is required";
              } else if (watch("password") !== val) {
                return "Your passwords do no match";
              }
            },
          })}
        ></input>
        {errors.confirmPassword && (
          <span className="text-red-500">{errors.confirmPassword.message}</span>
        )}
      </label>
      <span>
        <button
          type="submit"
          className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 
          focus:ring-primary-300 font-medium rounded-lg text-md px-4 lg:px-5 py-2 lg:py-2.5 
          mr-2 focus:outline-none w-full"
          >
          Register
        </button>
      </span>
    </form>
    </div>
  );
};

export default Register;