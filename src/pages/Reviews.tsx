import { Toaster } from "react-hot-toast";
import ReviewsTable from "../components/Reviews/ReviewsTable";
import TablesFooter from "../components/TablesFooter";
import useReviews from "../hooks/useReviews";

const Reviews = () => {
  const { data, error } = useReviews();
  console.error(data);
  if (error || !data) return null;
  else
    return (
      <div className="w-full">
        <ReviewsTable reviews={data.result} />
        <TablesFooter rows={data.result.length} total={data.count} />
        <Toaster />
      </div>
    );
};

export default Reviews;
