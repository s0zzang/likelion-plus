import CommentNew from "@/pages/community/CommentNew";
import CommentItem from "./CommentItem";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { ApiRes, MultiItem } from "@/types/response";
import { PostComment } from "@/types/post";

async function fetchComments(
  postId: string
): Promise<ApiRes<MultiItem<PostComment>>> {
  const url = `${import.meta.env.VITE_API_SERVER}/posts/${postId}/replies`;
  const res = await fetch(url);
  return res.json();
}

export default function CommentList() {
  const { type, _id } = useParams();
  const { data } = useQuery({
    queryKey: [type, _id, "replies"],
    queryFn: () => fetchComments(_id!),
    select: (data) => {
      if (data.ok) return data.item;
    },
  });

  const list = data?.map((item) => <CommentItem key={item._id} item={item} />);

  return (
    <section className="mb-8">
      <h4 className="mt-8 mb-4 ml-2">댓글 {(data && data?.length) || 0}개</h4>
      {list}
      <CommentNew />
    </section>
  );
}
