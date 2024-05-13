import { BsTrash3Fill } from "react-icons/bs";
import useDeleteComment from "../../hooks/useDeleteComment";

interface Props {
  id: number;
}

const DeleteCommentButton = ({ id }: Props) => {
  const deleteComment = useDeleteComment(id);
  return (
    <button>
      <BsTrash3Fill
        onClick={async () => await deleteComment.mutateAsync()}
        color="crimson"
        className="bg-red-500 bg-opacity-10 h-7 w-7 p-1.5 mx-1 rounded"
      />
    </button>
  );
};

export default DeleteCommentButton;
