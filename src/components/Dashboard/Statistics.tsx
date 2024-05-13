import { IoIosStats } from "react-icons/io";
import { IoFilm } from "react-icons/io5";
import { FaComments } from "react-icons/fa";
import { IoMdStarHalf } from "react-icons/io";

const Statistics = () => {
  return (
    <>
      <div className="ml-7 mt-4 grid md:grid-cols-4 grid-cols-2 gap-2 min-w-max">
        <div
          style={{ backgroundColor: "rgb(40, 42, 50)" }}
          className="block rounded-lg pt-6 px-6 mx-2  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
        >
          <p className="mb-2 text-xs font-medium leading-tight text-neutral-400 dark:text-neutral-50">
            Unique Views this month
          </p>
          <div className="flex justify-between">
            <p className="mb-4 text-lg text-white">5 678</p>
            <IoIosStats color="#eab308" className="h-6 w-6" />
          </div>
        </div>
        <div
          style={{ backgroundColor: "rgb(40, 42, 50)" }}
          className="block rounded-lg pt-6 px-6 mx-2  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
        >
          <p className="mb-2 text-xs font-medium leading-tight text-neutral-400 dark:text-neutral-50">
            Items added this month
          </p>
          <div className="flex justify-between">
            <p className="mb-4 text-lg text-white">172</p>
            <IoFilm color="#eab308" className="h-6 w-6" />
          </div>
        </div>
        <div
          style={{ backgroundColor: "rgb(40, 42, 50)" }}
          className="block rounded-lg pt-6 px-6 mx-2  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
        >
          <p className="mb-2 text-xs font-medium leading-tight text-neutral-400 dark:text-neutral-50">
            New comments
          </p>
          <div className="flex justify-between">
            <p className="mb-4 text-lg text-white">2 573</p>
            <FaComments color="#eab308" className="h-6 w-6" />
          </div>
        </div>
        <div
          style={{ backgroundColor: "rgb(40, 42, 50)" }}
          className="block rounded-lg pt-6 px-6 mx-2  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
        >
          <p className="mb-2 text-xs font-medium leading-tight text-neutral-400 dark:text-neutral-50">
            New reviews
          </p>
          <div className="flex justify-between">
            <p className="mb-4 text-lg text-white">1 021</p>
            <IoMdStarHalf color="#eab308" className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
