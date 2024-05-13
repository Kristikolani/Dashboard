import { Outlet } from "react-router-dom";
import EditUserHeader from "../components/EditUser/EditUserHeader";
import useUsers from "../hooks/useUsers";

const EditUser = () => {
  const { data, error } = useUsers();
  console.error(data);
  if (error || !data) return null;
  else
    return (
      <div>
        <p className="text-white text-2xl mt-2 ml-10">Edit User</p>;
        <hr className=" h-0.5 border-t-0 bg-neutral-100 opacity-5" />
        <EditUserHeader users={data?.result} />
        <Outlet />
      </div>
    );
};

export default EditUser;
