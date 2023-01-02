import { useForm } from "react-hook-form";
import ErrorString from "../Error/ErrorString";
import { motion } from "framer-motion";

interface FormValues {
  email: string;
  password: string;
}

const SignInComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onFormSubmit = (data: FormValues) => console.log(data);

  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      className="w-full flex flex-col items-center mt-4"
    >
      <h3 className="text-3xl font-bold">SignIn</h3>
      <div className="w-full max-w-xl">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit(onFormSubmit)}
        >
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
          <div className="mb-6">
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
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default SignInComponent;
