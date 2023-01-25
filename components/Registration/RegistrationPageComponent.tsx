import { useForm } from "react-hook-form";
import ErrorString from "../Error/ErrorString";
import { motion } from "framer-motion";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../pages/_app";
import { useRouter } from "next/router";

interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const RegistrationPageComponent = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>();

  const onFormSubmit = async (data: FormValues) => {
    const { email, password } = data;

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        router.push("/signin");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      className="w-full flex flex-col items-center absolute top-[50%] translate-y-[-50%]"
    >
      <div className="w-full max-w-2xl">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit(onFormSubmit)}
        >
          <h3 className="text-3xl font-bold text-center">Registration</h3>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              htmlFor="username"
            >
              Email
            </label>
            <input
              {...register("email", {
                required: true,
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email",
                },
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              aria-invalid={errors.email ? "true" : "false"}
              id="email"
              type="email"
              placeholder="Email"
            />
            {errors.email && errors.email.type === "required" && (
              <ErrorString message="Email is required" />
            )}
            {errors.email && errors.email.type === "pattern" && (
              <ErrorString message="Invalid Email" />
            )}
          </div>
          <div className="mb-3">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              {...register("password", { required: true, minLength: 6 })}
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mt-2 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              aria-invalid={errors.password ? "true" : "false"}
              id="password"
              type="password"
              placeholder="******************"
            />
            {errors.password && errors.password.type === "required" && (
              <ErrorString message="Password is required" />
            )}
            {errors.password && errors.password.type === "minLength" && (
              <ErrorString message="Legnth must be at least 6 symbols" />
            )}
          </div>
          <div className="mb-3">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              htmlFor="password"
            >
              Confirm Password
            </label>
            <input
              {...register("confirmPassword", {
                required: true,
                validate: (val: string) => {
                  if (watch("password") != val) {
                    return "Your passwords do no match";
                  }
                },
              })}
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mt-2 leading-tight focus:outline-none focus:shadow-outline"
              name="confirmPassword"
              aria-invalid={errors.confirmPassword ? "true" : "false"}
              id="confirmPassword"
              type="password"
              placeholder="******************"
            />
            {errors.confirmPassword &&
              errors.confirmPassword.type === "required" && (
                <ErrorString message="Please confirm your password " />
              )}
            {errors.confirmPassword &&
              errors.confirmPassword.type === "validate" && (
                <ErrorString message="Passwords must match" />
              )}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default RegistrationPageComponent;
