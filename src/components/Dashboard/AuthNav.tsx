import { BsBoxArrowRight } from "react-icons/bs";

const AuthNav = () => {
  const Role = localStorage.getItem("tokenRole");
  const Name = localStorage.getItem("name");
  return (
    <>
      <div className="flex flex-row">
        <div className="px-1 mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-8 h-8 p-1 rounded my-2 bg-gray-800 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </div>
        <div className="py-1 pl-2">
          <p className="py-1 text-xs text-gray-500">{Role}</p>
          <p className=" font-semibold text-sm text-white">{Name}</p>
        </div>
        <a
          className="pl-5"
          href="/auth/login"
          onClick={() => localStorage.clear()}
        >
          <BsBoxArrowRight
            className="w-9 h-9 my-2 mx-5 border-2 rounded p-2 border-yellow-500"
            color="white"
          />
        </a>
      </div>
      <div className="mx-5 w-0.5 bg-neutral-100 opacity-5"></div>
    </>
  );
};

export default AuthNav;
