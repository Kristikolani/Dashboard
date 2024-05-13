import { MdSort } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import AuthNav from "../Dashboard/AuthNav";
import useItemQueryStore from "../../store/itemStore";
import { useRef } from "react";

const CatalogNav = () => {
  const { setSearchText } = useItemQueryStore();
  const { setSortOrder } = useItemQueryStore();
  const { sortOrder } = useItemQueryStore((s) => s.itemQuery);
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div className="flex w-full justify-between">
      <div className="flex">
        <AuthNav />
        <p className=" text-3xl p-2 font-normal text-white ">Catalog</p>
        <h5 className=" text-base text-neutral-300 mt-3 p-2">14,452 Total</h5>
      </div>
      <div>
        <div className="flex">
          <div>
            <p className="text-sm text-neutral-400 pt-2">Sort by:</p>
            <select
              style={{ backgroundColor: "rgb(35, 35, 40)" }}
              className="block w-fit py-1  appearance-none rounded-md text-sm text-neutral-200 leading-[1] outline-none transition duration-200 ease-in-out"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value={"Date"}>Date created</option>
              <option value={"Title"}>Title</option>
            </select>
          </div>
          <MdSort className="text-white mt-8 ml-1" />

          <div
            style={{ backgroundColor: "rgb(40, 42, 50)" }}
            className="m-2 ml-8 flex border-solid"
          >
            <form
              onSubmit={(event) => {
                event.preventDefault();
                if (ref.current) setSearchText(ref.current.value);
              }}
              className="flex"
            >
              <input
                style={{ backgroundColor: "rgb(40, 42, 50)" }}
                className="w-full rounded m-2 px-3 py-[0.25rem] text-base text-white font-normal leading-[1.6]  outline-none transition duration-200 ease-in-out"
                placeholder="Find movie / tv series.. "
                aria-label="Search"
                aria-describedby="button-addon2"
                ref={ref}
              ></input>
              <button
                className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                id="basic-addon2"
                type="submit"
              >
                <IoIosSearch color="white" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogNav;
