import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { signIn } from "../api/authentication";
import { useAppContext } from "../context/AppContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

export type SignInFormData = {
  email: string;
  password: string;
};

const Login = () => {
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const location = useLocation();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormData>();

  const mutation = useMutation(signIn, {
    onSuccess: async () => {
      showToast({ message: "Sign in Successful!", type: "SUCCESS" });
      await queryClient.invalidateQueries("validateToken");
      navigate(location.state?.from?.pathname || "/");
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
      <h2 className="text-3xl text-center font-bold">Login</h2>
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
      <div className="flex flex-col items-center justify-between">
        <span className="text-sm mb-4">
          Not Registered?{" "}
          <Link className="underline" to="/register">
            Create an account here
          </Link>
        </span>
        <button
          type="submit"
          className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 
          focus:ring-primary-300 font-medium rounded-lg text-md px-4 lg:px-5 py-2 lg:py-2.5 
          mr-2 focus:outline-none w-full"
        >
          Login
        </button>
      </div>
    </form>
    </div>
  );
};

export default Login;