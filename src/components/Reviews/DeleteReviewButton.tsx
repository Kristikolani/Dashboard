import { BsTrash3Fill } from "react-icons/bs";
import useDeleteReview from "../../hooks/useDeleteReview";

interface Props {
  id: number;
}

const DeleteReviewButton = ({ id }: Props) => {
  const deleteReview = useDeleteReview(id);
  return (
    <button>
      <BsTrash3Fill
        onClick={async () => await deleteReview.mutateAsync()}
        color="crimson"
        className="bg-red-500 bg-opacity-10 h-7 w-7 p-1.5 mx-1 rounded"
      />
    </button>
  );
};

export default DeleteReviewButton;
