import CommentNew from "./CommentNew";
import CommentItem from "./CommentItem";
import { fetchPost } from "@/data/fetch/fetchPosts";

const CommentList = async ({ id }: { id: string }) => {
  const { replies } = await fetchPost(id);
  const repliesList = replies?.map((item) => {
    console.log(item);
    return <CommentItem key={item._id} reply={item} />;
  });

  return (
    <section className="mb-8">
      <h4 className="mt-8 mb-4 ml-2">댓글 {replies?.length || 0}개</h4>
      {repliesList}
      <CommentNew />
    </section>
  );
};

export default CommentList;
