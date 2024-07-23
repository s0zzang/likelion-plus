import CommentNew from "./CommentNew";
import CommentItem from "./CommentItem";

const CommentList = () => {
  return (
    <section className="mb-8">
      <h4 className="mt-8 mb-4 ml-2">댓글 2개</h4>
      <CommentItem />
      <CommentNew />
    </section>
  );
};

export default CommentList;
