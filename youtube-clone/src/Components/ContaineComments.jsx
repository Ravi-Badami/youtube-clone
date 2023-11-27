import { commentsData } from "../API/comments";
import CommentList from "./CommentList";

const CommentsContainer = () => {
  return (
    <div className="border rounded-lg shadow-lg shadow-green-700 border-gray-100 w-2/3 mt-8 p-4  ">
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
