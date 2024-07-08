import Button from "@components/Button";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import CommentList from "./CommentList";

const Detail = () => {
  let { _id } = useParams();
  const { data } = useFetch(`/posts/${_id}`);

  return (
    data && (
      <main className="container mx-auto mt-4 px-4">
        <section className="mb-8 p-4">
          <div className="font-semibold text-xl">제목 : {data.title}</div>
          <div className="text-right text-gray-400">
            작성자 : {data.user.name}
          </div>
          <div className="mb-4">
            <div>
              <pre className="font-roboto w-full p-2 whitespace-pre-wrap">
                {data.content}
              </pre>
            </div>
            <hr />
          </div>
          <div className="flex justify-end my-4">
            <Button onClick={() => history.back()}>목록</Button>
            <Button
              bgColor="gray"
              onClick={() => (location.href = "/info/1/edit")}
            >
              수정
            </Button>
            <Button bgColor="red" onClick={() => (location.href = "/info")}>
              삭제
            </Button>
          </div>
        </section>

        {/* 댓글 목록 */}
        <CommentList _id={_id} />
      </main>
    )
  );
};

export default Detail;
