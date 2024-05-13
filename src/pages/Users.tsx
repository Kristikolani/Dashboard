import { Toaster } from "react-hot-toast";
import TablesFooter from "../components/TablesFooter";
import UsersTable from "../components/Users/UsersTable";
import useUsers from "../hooks/useUsers";

const Users = () => {
  const { data, error } = useUsers();
  console.error(data);
  if (error || !data) return null;
  else
    return (
      <div className="w-full">
        <UsersTable users={data?.result} />
        <TablesFooter rows={data.result.length} total={data.count} />
        <Toaster />
      </div>
    );
};

export default Users;
