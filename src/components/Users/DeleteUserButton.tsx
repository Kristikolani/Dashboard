import { BsTrash3Fill } from "react-icons/bs";
import useDeleteUser from "../../hooks/useDeleteUser";

interface Props {
  id: number;
}

const DeleteUserButton = ({ id }: Props) => {
  const deleteUser = useDeleteUser(id);
  return (
    <button>
      <BsTrash3Fill
        onClick={async () => await deleteUser.mutateAsync()}
        color="crimson"
        className="bg-red-500 bg-opacity-10 h-7 w-7 p-1.5 mx-1 rounded"
      />
    </button>
  );
};

export default DeleteUserButton;
