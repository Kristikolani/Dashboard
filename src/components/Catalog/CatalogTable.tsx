import { IoMdStar } from "react-icons/io";
import { IoIosLock } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { RiEditBoxFill } from "react-icons/ri";
import { Item } from "../../entities/Item";
import DeleteItemButton from "./DeleteItemButton";

interface Props {
  items: Item[];
}

const CatalogTable = ({ items }: Props) => {
  return (
    <div className="grid mb-2 grid-cols-1 min-w-max h-fit">
      <div className="block rounded-lg  px-4 mb-2 ml-8">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light border-separate  border-spacing-y-2">
                  <thead className=" font-medium">
                    <tr className="text-neutral-500 rounded">
                      <th scope="col" className="px-6 py-4">
                        ID
                      </th>
                      <th scope="col" className="px-6 py-4">
                        TITLE
                      </th>
                      <th scope="col" className="px-6 py-4">
                        RATING
                      </th>
                      <th scope="col" className="px-6 py-4">
                        CATEGORY
                      </th>
                      <th scope="col" className="px-6 py-4">
                        VIEWS
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
                    {items?.map((item) => (
                      <tr style={{ backgroundColor: "rgb(40, 42, 50)" }}>
                        <td className="whitespace-nowrap px-6 py-2 my-2 font-medium text-white rounded-tl rounded-l">
                          {item.id}
                        </td>
                        <td className="whitespace-nowrap px-6 py-2 font-medium text-white  my-2 ">
                          {item.title}
                        </td>
                        <td className="whitespace-nowrap flex px-6 py-2 font-medium text-white my-2 ">
                          <IoMdStar
                            color="#eab308"
                            className="mx-1 h-4 w-4 mt-0.5"
                          />
                          {item.rating}
                        </td>
                        <td className="whitespace-nowrap px-6 py-2 font-medium text-white my-2 ">
                          {item.category}
                        </td>
                        <td className="whitespace-nowrap px-6 py-2 font-medium text-white  my-2 ">
                          {item.views}
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
                        <td className="whitespace-nowrap px-6 py-2 font-medium text-white my-2">
                          {item.createdDate.toString().split("T")[0]}
                        </td>
                        <td className="whitespace-nowrap flex px-6 py-2 my-2 font-medium text-white">
                          <button>
                            <IoIosLock
                              color="green"
                              className="bg-green-500 bg-opacity-10 h-7 w-7 p-1.5 mx-1 rounded"
                            />
                          </button>
                          <button>
                            <IoIosEye
                              color="yellow"
                              className="bg-yellow-500 bg-opacity-10 h-7 w-7 p-1.5 mx-1 rounded"
                            />
                          </button>
                          <button>
                            <RiEditBoxFill
                              color="dodgerblue"
                              className="bg-blue-500 bg-opacity-10 h-7 w-7 p-1.5 mx-1 rounded"
                            />
                          </button>
                          <DeleteItemButton id={item.id} />
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
  );
};

export default CatalogTable;
