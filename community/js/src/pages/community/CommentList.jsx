import useFetch, { API_SERVER } from "../../hooks/useFetch";
import Button from "@components/Button";
import CommentNew from "./CommentNew";

const CommentList = ({ _id }) => {
  const { data } = useFetch(`/posts/${_id}/replies`);
  console.log(data);

  return (
    <section className="mb-8">
      <h4 className="mt-8 mb-4 ml-2">댓글 {data?.length || 0}개</h4>

      {/* 댓글 */}
      {data?.length ? (
        <div className="shadow-md rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <img
              className="w-8 mr-2 rounded-full object-cover aspect-square"
              src={`${API_SERVER}/${data[0].user.profile}`}
              alt={`${data[0].user.name} 프로필 이미지`}
            />
            <a href="" className="text-orange-400">
              {data[0].user.name}
            </a>
            <time
              className="ml-auto text-gray-500"
              dateTime={data[0].createdAt}
            >
              {data[0].createdAt}
            </time>
          </div>
          <div className="flex justify-between items-center mb-2">
            <pre className="whitespace-pre-wrap text-sm">{data[0].content}</pre>
            <Button bgColor="red" size="sm">
              삭제
            </Button>
          </div>
        </div>
      ) : null}

      {/* 댓글 입력 */}
      <CommentNew />
    </section>
  );
};

export default CommentList;
