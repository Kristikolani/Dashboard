import { IoIosLock } from "react-icons/io";
import { RiEditBoxFill } from "react-icons/ri";
import { User } from "../../entities/User";
import DeleteUserButton from "./DeleteUserButton";

interface Props {
  users: User[];
}

const UsersTable = ({ users }: Props) => {
  return (
    <>
      <div className="grid mb-2 grid-cols-1 min-w-max h-fit">
        <div className="block rounded-lg  px-4 mb-2 ml-8">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-sm font-light border-separate  border-spacing-y-2">
                    <thead className=" font-medium">
                      <tr className="text-neutral-500">
                        <th scope="col" className="px-6 py-4">
                          ID
                        </th>
                        <th scope="col" className="px-6 py-4">
                          BASIC INFO
                        </th>
                        <th scope="col" className="px-6 py-4">
                          USERNAME
                        </th>
                        <th scope="col" className="px-6 py-4">
                          PRICING PLAN
                        </th>
                        <th scope="col" className="px-6 py-4">
                          COMMENTS
                        </th>
                        <th scope="col" className="px-6 py-4">
                          REVIEWS
                        </th>
                        <th scope="col" className="px-6 py-4">
                          STATUS
                        </th>
                        <th scope="col" className="px-6 py-4">
                          CREATED DATE
                        </th>
                        <th scope="col" className="px-6 py-4">
                          ACTIONS
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {users?.map((item) => (
                        <tr style={{ backgroundColor: "rgb(40, 42, 50)" }}>
                          <td className="whitespace-nowrap px-6 py-2 my-2 font-medium text-white rounded-tl rounded-bl">
                            {item.id}
                          </td>
                          <td className="whitespace-nowrap px-6 py-2 font-medium text-white  my-2 ">
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
                                <p className="py-1 text-xs text-white">
                                  {item.firstName + " " + item.lastName}
                                </p>
                                <p className=" font-semibold text-sm text-gray-500">
                                  {item.email}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap flex px-6 py-2 font-medium text-white my-2 ">
                            {item.username}
                          </td>
                          <td className="whitespace-nowrap px-6 py-2 font-medium text-white my-2 ">
                            {item.subscription}
                          </td>
                          <td className="whitespace-nowrap px-6 py-2 font-medium text-white my-2 ">
                            {item.comments?.length}
                          </td>
                          <td className="whitespace-nowrap px-6 py-2 font-medium text-white my-2 ">
                            {item.reviews?.length}
                          </td>
                          <td
                            className={`whitespace-nowrap px-6 py-2 font-medium  my-2  ${
                              item.status === "Approved"
                                ? "text-green-500"
                                : "text-red-500"
                            } `}
                          >
                            {item.status}
                          </td>
                          <td className="whitespace-nowrap px-6 py-2 font-medium text-white my-2">
                            {item.createdDate.toString().split("T")[0]}
                          </td>
                          <td className="whitespace-nowrap flex px-6 py-2 my-2 font-medium text-white rounded-r">
                            <button>
                              <IoIosLock
                                color="green"
                                className="bg-green-500 bg-opacity-10 h-7 w-7 p-1.5 mx-1 rounded"
                              />
                            </button>
                            <a href={"edit_user/profile/" + item.id}>
                              <RiEditBoxFill
                                color="dodgerblue"
                                className="bg-blue-500 bg-opacity-10 h-7 w-7 p-1.5 mx-1 rounded"
                              />
                            </a>
                            <DeleteUserButton id={item.id} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UsersTable;
