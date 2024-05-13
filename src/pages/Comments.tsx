import { Toaster } from "react-hot-toast";
import CommentsTable from "../components/Comments/CommentsTable";
import TablesFooter from "../components/TablesFooter";
import useComments from "../hooks/useComments";

const Comments = () => {
  const { data, error } = useComments();

  if (error || !data) {
    return null;
  }
  return (
    <div className="w-full">
      <CommentsTable comments={data.result} />
      <TablesFooter rows={data.result.length} total={data.count} />
      <Toaster />
    </div>
  );
};

export default Comments;
