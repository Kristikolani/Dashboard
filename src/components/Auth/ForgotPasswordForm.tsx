const ForgotPasswordForm = () => {
  return (
    <>
      <div className="min-w-fit">
        <div
          style={{ backgroundColor: "rgb(25, 27, 35)" }}
          className="block w-96 h-72 rounded-lg p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
        >
          <form className="my-2 mt-8">
            <input
              className="w-[85%] rounded my-5 ml-4 px-3 py-[0.25rem] text-sm text-white font-normal leading-[1.6]  outline-none transition duration-200 ease-in-out"
              style={{ backgroundColor: "rgb(40, 42, 50)" }}
              type="email"
              placeholder="Email"
            ></input>
            <a
              href="/"
              type="button"
              className="block w-[85%] rounded bg-transparent mt-5 ml-4 my-2 px-6 pb-2 pt-2.5 text-center text-xs font-medium uppercase leading-normal text-white border-2 border-yellow-500 hover:bg-gray-900"
            >
              Send
            </a>
            <div className="my-5 py-2">
              <p className=" text-center text-base text-white">
                We will send a password to your Email
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordForm;
