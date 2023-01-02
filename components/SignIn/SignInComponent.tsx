import { useForm } from "react-hook-form";

interface FormValues {
  username: string;
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
    <div className="w-full flex flex-col items-center mt-4">
      <h3 className="text-3xl font-bold">SignIn</h3>
      <div className="w-full max-w-xl">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit(onFormSubmit)}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              {...register("username", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="username"
              aria-invalid={errors.username ? "true" : "false"}
              id="username"
              type="text"
              placeholder="Username"
            />
            {errors.username && errors.username.type === "required" && (
              <div
                className="bg-red-100 border mt-2 border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <span className="block sm:inline">Username is required</span>
              </div>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
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
              <div
                className="bg-red-100 border mt-2 border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <span className="block sm:inline">Password is required</span>
              </div>
            )}

            {errors.password && errors.password.type === "minLength" && (
              <div
                className="bg-red-100 border mt-2 border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <span className="block sm:inline">
                  Legth must be at least 6 symbols
                </span>
              </div>
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
    </div>
  );
};

export default SignInComponent;
