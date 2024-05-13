import { useNavigate } from "react-router-dom";
import useUserQueryStore from "../../store/userStore";
interface Props {
  total: number;
}
const PaginationUsers = ({ total }: Props) => {
  const setPageNumber = useUserQueryStore((s) => s.setPageNumber);
  const navigate = useNavigate();
  const pageNumber = useUserQueryStore((s) => s.userQuery.pageNumber);
  const maxPage = Math.floor(
    total ? total / 10 + (total % 10 !== 0 ? 1 : 0) : 3
  );
  const pages = [...Array(maxPage + 1).keys()].slice(1);
  return (
    <div
      className="block rounded-lg w-fit h-fit m-4 py-1 text-white"
      style={{ backgroundColor: "rgb(40, 42, 50)" }}
    >
      <nav aria-label="Page navigation">
        <ul className="list-style-none flex">
          <li className="mx-1">
            <button
              onClick={() => {
                setPageNumber(
                  pageNumber && pageNumber > 1 ? pageNumber - 1 : 1
                ),
                  navigate("/users");
              }}
              className="relative block rounded bg-transparent px-3 py-1.5 text-base text-white transition-all duration-300"
              aria-label="Previous"
            >
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
          {pages.map((num) => (
            <li key={num} className="mx-1">
              <button
                className={`${
                  pageNumber === num ? "border-2 border-yellow-500" : "border-0"
                } relative block rounded bg-transparent px-3 py-1.5 text-base text-white transition-all duration-50`}
                onClick={() => {
                  setPageNumber(num);
                  navigate("/users");
                }}
              >
                {num}
              </button>
            </li>
          ))}
          <li className="mx-1">
            <button
              onClick={() => {
                setPageNumber(
                  pageNumber && pageNumber < maxPage ? pageNumber + 1 : maxPage
                ),
                  navigate("/users");
              }}
              className="relative block rounded bg-transparent px-3 py-1.5 text-base text-white transition-all duration-300"
              aria-label="Previous"
            >
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PaginationUsers;
