import { useParams } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import ReviewsTable from "../Reviews/ReviewsTable";

const EditUserReviews = () => {
  const params = useParams();
  const id = Number(params.id);
  const { data, error } = useReviews();
  console.error(data);
  if (error || !data) return null;
  else
    return (
      <div className="min-w-max">
        <ReviewsTable
          reviews={data.result.filter((comment) => comment.user.id == id)}
        />
      </div>
    );
};

export default EditUserReviews;
