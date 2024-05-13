import { BsTrash3Fill } from "react-icons/bs";
import useDeleteItem from "../../hooks/useDeleteItem";

interface Props {
  id: number;
}

const DeleteItemButton = ({ id }: Props) => {
  const deleteItem = useDeleteItem(id);
  return (
    <button>
      <BsTrash3Fill
        onClick={async () => await deleteItem.mutateAsync()}
        color="crimson"
        className="bg-red-500 bg-opacity-10 h-7 w-7 p-1.5 mx-1 rounded"
      />
    </button>
  );
};

export default DeleteItemButton;
