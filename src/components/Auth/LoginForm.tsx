import { useState } from "react";
import useLogin from "../../hooks/useLogin";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginMutation = useLogin();

  const handleLogin = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    loginMutation.mutate({ email, password });
    if (loginMutation.isSuccess) {
      window.location.href = "/";
    }
  };
  return (
    <>
      <div className="min-w-fit">
        <div
          style={{ backgroundColor: "rgb(25, 27, 35)" }}
          className="block w-72 lg:w-96 lg:h-96 rounded-lg p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
        >
          <form className="mt-10" onSubmit={handleLogin}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[85%] rounded my-3 ml-4 px-3 py-[0.25rem] text-sm text-white font-normal leading-[1.6]  outline-none transition duration-200 ease-in-out"
              style={{ backgroundColor: "rgb(40, 42, 50)" }}
              type="email"
              placeholder="Email"
            ></input>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="w-[85%] rounded my-3 ml-4 px-3 py-[0.25rem] text-sm text-white font-normal leading-[1.6]  outline-none transition duration-200 ease-in-out"
              style={{ backgroundColor: "rgb(40, 42, 50)" }}
            ></input>

            <button
              type="submit"
              className="block w-[85%] rounded bg-transparent mt-8 ml-4 my-2 px-6 pb-2 pt-2.5 text-center text-xs font-medium uppercase leading-normal text-white border-2 border-yellow-500 hover:bg-gray-900"
            >
              Sign in
            </button>

            <p className="mt-6 text-center text-sm text-white">
              Don't have an account?
              <a href="#!" className="text-yellow-500 mx-1 my-2">
                Sign up!
              </a>
            </p>
            <div className="flex justify-center my-4">
              <a
                href="/auth/forgotPassword"
                className="text-yellow-500 text-sm"
              >
                Forgot password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
