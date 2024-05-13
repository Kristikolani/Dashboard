import PaginationCatalog from "./Catalog/PaginationCatalog";
import PaginationComments from "./Comments/PaginationComments";
import PaginationReviews from "./Reviews/PaginationReviews";
import PaginationUsers from "./Users/PaginationUsers";

interface Props {
  rows: number;
  total: number;
}

const TablesFooter = ({ rows, total }: Props) => {
  const pathname = window.location.href.split("/").slice(-1).toString();
  console.log(rows, total);
  return (
    <>
      <div className="flex justify-between">
        <div
          className="block rounded-lg w-fit h-fit ml-12 my-2 py-3 px-4 text-white"
          style={{ backgroundColor: "rgb(40, 42, 50)" }}
        >
          {rows} from {total}
        </div>
        {pathname == "catalog" && <PaginationCatalog total={total} />}
        {pathname == "comments" && <PaginationComments total={total} />}
        {pathname == "reviews" && <PaginationReviews total={total} />}
        {pathname == "users" && <PaginationUsers total={total} />}
      </div>
    </>
  );
};

export default TablesFooter;
