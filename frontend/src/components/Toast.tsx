import { useEffect } from "react";

type Props = {
  message: string;
  type: "SUCCESS" | "ERROR";
  onClose: () => void;
};

const Toast = ({ message, type, onClose }: Props) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  const styles = `fixed top-4 right-4 z-50 p-4 rounded-lg text-white shadow-lg max-w-sm transition-transform transform ${
    type === "SUCCESS"
      ? "bg-green-500 translate-x-0 opacity-100"
      : "bg-red-500 translate-x-0 opacity-100"
  }`;

  return (
    <div className={styles}>
      <div className="flex items-center space-x-2">
        <span className="text-lg font-semibold">{message}</span>
      </div>
    </div>
  );
};

export default Toast;
