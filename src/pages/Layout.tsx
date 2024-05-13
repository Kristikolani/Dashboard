import { Outlet } from "react-router-dom";
import CatalogNav from "../components/Catalog/CatalogNav";
import CommentsNav from "../components/Comments/CommentsNav";
import DashboardNav from "../components/Dashboard/DashboardNav";
import ReviewsNav from "../components/Reviews/ReviewsNav";
import SidePanel from "../components/SidePanel";
import UsersNav from "../components/Users/UsersNav";

const NavbarName = () => {
  switch (window.location.pathname) {
    case "/catalog":
      return <CatalogNav />;
    case "/users":
      return <UsersNav />;
    case "/comments":
      return <CommentsNav />;
    case "/reviews":
      return <ReviewsNav />;
    default:
      return <DashboardNav />;
  }
};

const Layout = () => {
  return (
    <>
      <div className="mx-3 my-1 ">
        <NavbarName />
      </div>
      <hr className="my-2 h-0.5 border-t-0 bg-neutral-100 opacity-5" />
      <div className="flex flex-1 mx-5">
        <SidePanel />
        <hr className=" h-screen ml-24 w-0.5 bg-neutral-100 opacity-5"></hr>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
