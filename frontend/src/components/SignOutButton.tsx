import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api/authentication";
import { useAppContext } from "../context/AppContext";

const SignOutButton = () => {
  const queryClient = useQueryClient();
  const { showToast } = useAppContext();

  const mutation = useMutation(apiClient.signOut, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      showToast({ message: "Logged Out Successfully!", type: "SUCCESS" });
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const handleClick = () => {
    mutation.mutate();
  };

  return (
    <button
    onClick={handleClick}
    className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 
      focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 
      mr-2 focus:outline-none"
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;