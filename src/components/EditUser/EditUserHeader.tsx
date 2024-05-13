import { BsTrash3Fill } from "react-icons/bs";
import { IoIosLock } from "react-icons/io";
import { useParams } from "react-router-dom";
import { User } from "../../entities/User";

interface Props {
  users: User[];
}

const EditUserHeader = ({ users }: Props) => {
  const params = useParams();
  const id = Number(params.id);
  const user = users?.filter((user) => user.id == id);
  return (
    <>
      <div
        style={{ backgroundColor: "rgb(40, 42, 50)" }}
        className="block my-4 rounded-lg py-2 px-4 pr-8 ml-10 w-[92vw] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
      >
        {user?.map((user) => (
          <div className="flex flex-row justify-between">
            <div className="flex">
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
                <p className="py-1 text-xs flex text-white">
                  {user.firstName + " " + user.lastName}
                  <p
                    className={`whitespace-nowrap font-medium ml-1  ${
                      user.status === "Approved"
                        ? "text-green-500"
                        : "text-red-500"
                    } `}
                  >
                    ({user.status})
                  </p>
                </p>
                <p className=" font-semibold text-xs text-gray-500">
                  HotFlix ID: {user.id}
                </p>
              </div>
              <div
                className={`ml-8 mr-5 mt-3 text-sm   ${
                  window.location.pathname === "/edit_user/profile/" + user.id
                    ? " border-b-2  border-yellow-500"
                    : " border-none"
                }`}
              >
                <a
                  href={"/edit_user/profile/" + user.id}
                  className={`mx-2 ${
                    window.location.pathname === "/edit_user/profile/" + user.id
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                >
                  PROFILE
                </a>
              </div>
              <div
                className={`mx-5 mt-3 text-sm   ${
                  window.location.pathname === "/edit_user/comments/" + user.id
                    ? " border-b-2  border-yellow-500"
                    : " border-none"
                }`}
              >
                <a
                  href={"/edit_user/comments/" + user.id}
                  className={`mx-2 ${
                    window.location.pathname ===
                    "/edit_user/comments/" + user.id
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                >
                  COMMENTS
                </a>
              </div>
              <div
                className={`mx-5 mt-3 text-sm   ${
                  window.location.pathname === "/edit_user/reviews/" + user.id
                    ? " border-b-2  border-yellow-500"
                    : " border-none"
                }`}
              >
                <a
                  href={"/edit_user/reviews/" + user.id}
                  className={`mx-2 ${
                    window.location.pathname === "/edit_user/reviews/" + user.id
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                >
                  REVIEWS
                </a>
              </div>
            </div>
            <div className="flex">
              <a href="/users" className="mt-2.5 mx-1">
                <IoIosLock
                  color="green"
                  className="bg-green-500 bg-opacity-10 h-7 w-7 p-1.5 mx-1 rounded"
                />
              </a>
              <button>
                <BsTrash3Fill
                  color="crimson"
                  className="bg-red-500 bg-opacity-10 h-7 w-7 p-1.5 mx-1 rounded"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default EditUserHeader;
