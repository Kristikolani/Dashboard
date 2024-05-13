import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <div className=" bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(25,25,25,25)),linear-gradient(to_top,rgba(0,0,0,0),rgba(25,25,25,25)),url('../src/assets/cinema.png')] bg-no-repeat bg-center bg-cover h-[98vh] w-full">
        <Outlet />
      </div>
    </>
  );
};

export default AuthLayout;
