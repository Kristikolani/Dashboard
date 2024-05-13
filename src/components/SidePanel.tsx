import { CgMenuGridO } from "react-icons/cg";
import { IoFilm } from "react-icons/io5";
import { TbUsers } from "react-icons/tb";
import { FaComments } from "react-icons/fa";
import { IoMdStarHalf } from "react-icons/io";

const SidePanel = () => {
  return (
    <>
      <div>
        <div className="flex pt-4">
          <a href="/" className="light">
            <CgMenuGridO
              className="m-1"
              color={`${
                window.location.pathname === "/" ? "#eab308" : "white"
              }`}
            />
          </a>
          <a
            href="/"
            className={`mx-2 ${
              window.location.pathname === "/"
                ? "text-yellow-500"
                : "text-white"
            }`}
          >
            DASHBOARD
          </a>
        </div>
        <div className="flex pt-3">
          <a href="/catalog">
            <IoFilm
              className="m-1"
              color={`${
                window.location.pathname === "/catalog" ? "#eab308" : "white"
              }`}
            />
          </a>
          <a
            href="/catalog"
            className={`mx-2 ${
              window.location.pathname === "/catalog"
                ? "text-yellow-500"
                : "text-white"
            }`}
          >
            CATALOG
          </a>
        </div>
        <div className="flex pt-3">
          <a className="light">
            <TbUsers
              className="m-1"
              color={`${
                window.location.pathname === "/users" ? "#eab308" : "white"
              }`}
            />
          </a>
          <a
            href="/users"
            className={`mx-2 ${
              window.location.pathname === "/users"
                ? "text-yellow-500"
                : "text-white"
            }`}
          >
            USERS
          </a>
        </div>
        <div className="flex pt-3">
          <a className="light">
            <FaComments
              className="m-1"
              color={`${
                window.location.pathname === "/comments" ? "#eab308" : "white"
              }`}
            />
          </a>
          <a
            href="/comments"
            className={`mx-2 ${
              window.location.pathname === "/comments"
                ? "text-yellow-500"
                : "text-white"
            }`}
          >
            COMMENTS
          </a>
        </div>
        <div className="flex pt-3">
          <a className="light">
            <IoMdStarHalf
              className="m-1"
              color={`${
                window.location.pathname === "/reviews" ? "#eab308" : "white"
              }`}
            />
          </a>
          <a
            href="/reviews"
            className={`mx-2 ${
              window.location.pathname === "/reviews"
                ? "text-yellow-500"
                : "text-white"
            }`}
          >
            REVIEWS
          </a>
        </div>
      </div>
    </>
  );
};

export default SidePanel;
