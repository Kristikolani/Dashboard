import { IoTrophy } from "react-icons/io5";
import { IoIosRefresh } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { IoFilm } from "react-icons/io5";
import { TbUsers } from "react-icons/tb";
import { IoMdStarHalf } from "react-icons/io";
import { Item } from "../../entities/Item";
import { Review } from "../../entities/Review";
import { User } from "../../entities/User";

interface Props {
  items: Item[];
  users: User[];
  reviews: Review[];
}

const Tables = ({ items, users, reviews }: Props) => {
  return (
    <>
      <div className="grid my-2 md:grid-cols-2 grid-cols-1 min-w-max h-fit">
        <div
          style={{ backgroundColor: "rgb(40, 42, 50)" }}
          className="block rounded-lg py-5 px-4 my-2 ml-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
        >
          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              <IoTrophy color="#eab308" className="h-5 w-5" />
              <p className="ml-2 text-white">Top Items</p>
            </div>
            <div className="flex flex-row">
              <IoIosRefresh
                onClick={() => window.location.reload()}
                color="white"
                className="mr-2 mt-1 pt-0.5"
              />
              <a
                href="/catalog"
                style={{ backgroundColor: "rgb(35, 35, 40)" }}
                className="rounded content-center pl-3 p-1 w-20 h-8 text-white"
              >
                View All
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-y border-neutral-800 font-medium">
                      <tr className="text-neutral-500">
                        <th scope="col" className="px-6 py-4">
                          ID
                        </th>
                        <th scope="col" className="px-6 py-4">
                          TITLE
                        </th>
                        <th scope="col" className="px-6 py-4">
                          CATEGORY
                        </th>
                        <th scope="col" className="px-6 py-4">
                          RATING
                        </th>
                      </tr>
                    </thead>{" "}
                    <tbody>
                      {items.slice(0, 5).map((item) => (
                        <tr className="text-white">
                          <td className="whitespace-nowrap px-6 py-2 font-medium">
                            {item.id}
                          </td>
                          <td className="whitespace-nowrap px-6 py-2">
                            {item.title}
                          </td>
                          <td className="whitespace-nowrap px-6 py-2">
                            {item.category}
                          </td>
                          <td className="whitespace-nowrap px-6 py-2 flex font-semibold">
                            <IoMdStar
                              color="#eab308"
                              className="h-5 w-5 mr-1"
                            />
                            {item.rating}
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
        <div
          style={{ backgroundColor: "rgb(40, 42, 50)" }}
          className="block rounded-lg py-5 px-4 my-2 ml-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
        >
          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              <IoFilm color="#eab308" className="h-5 w-5" />
              <p className="ml-2 text-white">Latest Items</p>
            </div>
            <div className="flex flex-row">
              <IoIosRefresh
                onClick={() => window.location.reload()}
                color="white"
                className="mr-2 mt-1 pt-0.5"
              />
              <a
                href="/catalog"
                style={{ backgroundColor: "rgb(35, 35, 40)" }}
                className="rounded content-center pl-3 p-1 w-20 h-8 text-white"
              >
                View All
              </a>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-y border-neutral-800 font-medium">
                      <tr className="text-neutral-500">
                        <th scope="col" className="px-6 py-4">
                          ID
                        </th>
                        <th scope="col" className="px-6 py-4">
                          TITLE
                        </th>
                        <th scope="col" className="px-6 py-4">
                          CATEGORY
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.slice(0, 5).map((item) => (
                        <tr className="text-white">
                          <td className="whitespace-nowrap px-6 py-2 font-medium">
                            {item.id}
                          </td>
                          <td className="whitespace-nowrap px-6 py-2">
                            {item.title}
                          </td>
                          <td className="whitespace-nowrap px-6 py-2">
                            {item.category}
                          </td>
                          <td
                            className={`whitespace-nowrap px-6 py-2 font-medium   my-2  ${
                              item.status === "Visible"
                                ? "text-green-500"
                                : "text-red-500"
                            } `}
                          >
                            {item.status}
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
        <div
          style={{ backgroundColor: "rgb(40, 42, 50)" }}
          className="block rounded-lg py-5 px-4 my-2 ml-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
        >
          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              <TbUsers color="#eab308" className="h-5 w-5" />
              <p className="ml-2 text-white">Latest Users</p>
            </div>
            <div className="flex flex-row">
              <IoIosRefresh
                onClick={() => window.location.reload()}
                color="white"
                className="mr-2 mt-1 pt-0.5"
              />
              <a
                href="/users"
                style={{ backgroundColor: "rgb(35, 35, 40)" }}
                className="rounded content-center pl-3 p-1 w-20 h-8 text-white"
              >
                View All
              </a>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-y border-neutral-800 font-medium">
                      <tr className="text-neutral-500">
                        <th scope="col" className="px-6 py-4">
                          ID
                        </th>
                        <th scope="col" className="px-6 py-4">
                          FULL NAME
                        </th>
                        <th scope="col" className="px-6 py-4">
                          EMAIL
                        </th>
                        <th scope="col" className="px-6 py-4">
                          USERNAME
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.slice(0, 5).map((user) => (
                        <tr className="text-white">
                          <td className="whitespace-nowrap px-6 py-2 font-medium">
                            {user.id}
                          </td>
                          <td className="whitespace-nowrap px-6 py-2">
                            {user.firstName + " " + user.lastName}
                          </td>
                          <td className="whitespace-nowrap px-6 py-2">
                            {user.email}
                          </td>
                          <td className="whitespace-nowrap px-6 py-2 flex font-semibold">
                            {user.username}
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
        <div
          style={{ backgroundColor: "rgb(40, 42, 50)" }}
          className="block rounded-lg py-5 px-4 my-2 ml-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
        >
          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              <IoMdStarHalf color="#eab308" className="h-5 w-5" />
              <p className="ml-2 text-white">Latest Reviews</p>
            </div>
            <div className="flex flex-row">
              <IoIosRefresh
                onClick={() => window.location.reload()}
                color="white"
                className="mr-2 mt-1 pt-0.5"
              />
              <a
                href="/reviews"
                style={{ backgroundColor: "rgb(35, 35, 40)" }}
                className="rounded content-center pl-3 p-1 w-20 h-8 text-white"
              >
                View All
              </a>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-y border-neutral-800 font-medium">
                      <tr className="text-neutral-500">
                        <th scope="col" className="px-6 py-4">
                          ID
                        </th>
                        <th scope="col" className="px-6 py-4">
                          TITLE
                        </th>
                        <th scope="col" className="px-6 py-4">
                          AUTHOR
                        </th>
                        <th scope="col" className="px-6 py-4">
                          RATING
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {reviews.slice(0, 5).map((review) => (
                        <tr className="text-white">
                          <td className="whitespace-nowrap px-6 py-2 font-medium">
                            {review.id}
                          </td>
                          <td className="whitespace-nowrap px-6 py-2">
                            {review.item.title}
                          </td>
                          <td className="whitespace-nowrap px-6 py-2">
                            {review.user.firstName + " " + review.user.lastName}
                          </td>
                          <td className="whitespace-nowrap px-6 py-2 flex font-semibold">
                            <IoMdStar
                              color="#eab308"
                              className="h-5 w-5 mr-1"
                            />
                            7.2
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

export default Tables;
