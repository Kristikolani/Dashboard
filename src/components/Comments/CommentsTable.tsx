import { IoIosEye } from "react-icons/io";
import { Comment } from "../../entities/Comment";
import DeleteCommentButton from "./DeleteCommentButton";

interface Props {
  comments: Comment[];
}

const CommentsTable = ({ comments }: Props) => {
  return (
    <>
      <div className="grid mb-2 grid-cols-1 min-w-max h-fit">
        <div className="block rounded-lg  px-4 mb-2">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-0 lg:-mx-0">
              <div className="inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-sm font-light border-separate  border-spacing-y-2">
                    <thead className=" font-medium">
                      <tr className="text-neutral-500">
                        <th scope="col" className="px-6 py-4">
                          ID
                        </th>
                        <th scope="col" className="px-6 py-4">
                          ITEM
                        </th>
                        <th scope="col" className="px-6 py-4">
                          AUTHOR
                        </th>
                        <th scope="col" className="px-6 py-4">
                          TEXT
                        </th>
                        <th scope="col" className="px-6 py-4">
                          LIKE / DISLIKE
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
                      {comments.map((item) => (
                        <tr style={{ backgroundColor: "rgb(40, 42, 50)" }}>
                          <td className="whitespace-nowrap px-6 py-2 my-2 font-medium text-white rounded-tl rounded-bl">
                            {item.id}
                          </td>
                          <td className="whitespace-nowrap px-6 py-2 font-medium text-white  my-2 ">
                            {item.item.title}
                          </td>
                          <td className="whitespace-nowrap flex px-6 py-2 font-medium text-white my-2 ">
                            {item.user.firstName + " " + item.user.lastName}
                          </td>
                          <td className="whitespace-nowrap px-6 py-2 font-medium text-white my-2 ">
                            {item.text}
                          </td>
                          <td className="whitespace-nowrap px-6 py-2 font-medium text-white my-2 ">
                            {item.likes + "/" + item.dislikes}
                          </td>
                          <td className="whitespace-nowrap px-6 py-2 font-medium text-white my-2 ">
                            {item.createdDate.toString().split("T")[0]}
                          </td>
                          <td className="whitespace-nowrap flex px-6 py-2 my-2 font-medium text-white rounded-r">
                            <button>
                              <IoIosEye
                                color="yellow"
                                className="bg-yellow-500 bg-opacity-10 h-7 w-7 p-1.5 mx-1 rounded"
                              />
                            </button>
                            <DeleteCommentButton id={item.id} />
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

export default CommentsTable;
