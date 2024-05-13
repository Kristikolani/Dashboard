import { useNavigate } from "react-router-dom";
import useReviewQueryStore from "../../store/reviewStore";

interface Props {
  total: number;
}

const PaginationReviews = ({ total }: Props) => {
  const setPageNumber = useReviewQueryStore((s) => s.setPageNumber);
  const navigate = useNavigate();
  const pageNumber = useReviewQueryStore((s) => s.reviewQuery.pageNumber);
  const maxPage = Math.floor(
    total ? total / 10 + (total % 10 !== 0 ? 1 : 0) : 3
  );
  const pages = [...Array(maxPage + 1).keys()].slice(1);
  return (
    <div
      className="block rounded-lg w-fit h-fit mx-12 my-4 py-1 px-4 text-white"
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
                  navigate("/reviews");
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
                  navigate("/reviews");
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
                  navigate("/reviews");
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

export default PaginationReviews;
