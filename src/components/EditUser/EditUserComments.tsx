import { useParams } from "react-router-dom";
import useComments from "../../hooks/useComments";
import CommentsTable from "../Comments/CommentsTable";

const EditUserComments = () => {
  const params = useParams();
  const id = Number(params.id);
  const { data, error } = useComments();
  console.error(data);
  if (error || !data) return null;
  else
    return (
      <div className="min-w-max">
        <CommentsTable
          comments={data.result.filter((comment) => comment.user.id == id)}
        />
      </div>
    );
};

export default EditUserComments;
