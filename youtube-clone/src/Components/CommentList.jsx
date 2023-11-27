import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div className="" key={index}>
      <Comment data={comment} />
      <div className="pl-5 ml-5">
        {/* reply */}
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

export default CommentList;
