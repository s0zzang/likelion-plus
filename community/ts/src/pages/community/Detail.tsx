import Button from "@components/Button";
import useMutation from "@hooks/useMutation";
import useFetch, { API_SERVER } from "@hooks/useFetch";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "@recoil/atoms";
import CommentList from "./CommentList";
import { PostData } from "#types/type";

const Detail = () => {
  const navigate = useNavigate();
  const { _id, type } = useParams();
  const user = useRecoilValue(userState);
  const { data, refetch } = useFetch<PostData>(`/posts/${_id}`);
  const { send } = useMutation(`/posts/${_id}`, { method: "DELETE" });

  const profile = data?.user.profile
    ? `${API_SERVER}/${
        data?.user.profile instanceof Object
          ? data?.user.profile.path
          : data?.user.profile
      }`
    : "/favicon.png";

  const handleDelete = () => {
    send({
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token.accessToken}`,
      },
    });
    navigate(`/${type}`);
  };

  return (
    data && (
      <main className="container mx-auto mt-4 px-4">
        <section className="mb-8 p-4">
          <div className="flex flex-col">
            <div className="font-semibold text-xl">{data.title}</div>
            <div className="flex items-center gap-x-1 ml-auto text-right text-gray-400">
              <img
                className="w-5 aspect-square object-cover rounded-full"
                src={profile}
                alt={data.user?.name}
              />
              <p>{data.user.name}</p>
            </div>
          </div>
          <div>
            <pre className="font-roboto w-full py-8 whitespace-pre-wrap">
              {data.content}
            </pre>
          </div>
          <hr />
          <div className="flex justify-end my-8">
            <Button onClick={() => navigate(-1)}>목록</Button>
            {user && user._id === data.user._id && (
              <>
                <Button
                  bgColor="gray"
                  onClick={() => navigate(`/${type}/${_id}/edit`)}
                >
                  수정
                </Button>
                <Button bgColor="red" onClick={handleDelete}>
                  삭제
                </Button>
              </>
            )}
          </div>
        </section>

        {/* 댓글 목록 */}
        <CommentList _id={Number(_id)} refetch={refetch} />
      </main>
    )
  );
};

export default Detail;
