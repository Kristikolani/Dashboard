import AuthNav from "./AuthNav";

const DashboardNav = () => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex">
        <AuthNav />
        <h1 className=" text-3xl px-2 py-2 font-normal text-white ">
          Dashboard
        </h1>
      </div>
      <div className="px-1 pt-2">
        <a
          href="add_item"
          type="button"
          className="inline-block rounded border-2 border-yellow-500 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:border-warning-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-warning-600 focus:border-warning-600 focus:text-warning-600 focus:outline-none focus:ring-0 active:border-warning-700 active:text-warning-700"
        >
          ADD ITEM
        </a>
      </div>
    </div>
  );
};

export default DashboardNav;
