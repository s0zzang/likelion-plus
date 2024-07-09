import useFetch from "@hooks/useFetch";
import CommentNew from "./CommentNew";
import CommentItem from "./CommentItem";

const CommentList = ({ _id, refetch }) => {
  const { data } = useFetch(`/posts/${_id}/replies`);

  return (
    <section className="mb-8">
      <h4 className="mt-8 mb-4 ml-2">댓글 {data?.length || 0}개</h4>

      {/* 댓글 */}
      {data?.length
        ? data.map((item, idx) => (
            <CommentItem item={item} key={idx} refetch={refetch} />
          ))
        : null}

      {/* 댓글 입력 */}
      <CommentNew refetch={refetch} />
    </section>
  );
};

export default CommentList;
