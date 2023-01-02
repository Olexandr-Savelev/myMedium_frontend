import { motion } from "framer-motion";
import { FC } from "react";

interface IErrorString {
  message: string;
}

const ErrorString: FC<IErrorString> = ({ message }) => {
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      className="bg-red-100 border mt-2 border-red-400 text-red-700 px-3 py-2 rounded relative"
      role="alert"
    >
      <span className="block sm:inline">{message}</span>
    </motion.div>
  );
};

export default ErrorString;
