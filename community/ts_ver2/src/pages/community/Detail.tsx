import Spinner from "@/components/Spinner";
import Submit from "@/components/Submit";
import CommentList from "@/pages/community/CommentList";
import { userState } from "@/recoil/user/atoms";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

async function fetchPosts(_id: string) {
  const url = `${import.meta.env.VITE_API_SERVER}/posts/${_id}`;
  const res = await fetch(url);
  return res.json();
}

export default function Detail() {
  const { _id, type } = useParams();
  const { isLoading, data } = useQuery({
    queryKey: [type, _id],
    queryFn: () => fetchPosts(_id!), // 📍 무조건 필수값이기 때문에 단언
    // select : queryFn의 리턴값을 전달받아, 최종 data 값을 설정 (응답받은 데이터 가공)
    select: (resData) => resData.item,
    staleTime: 1000 * 30,
  });

  // 📍 user 구독 완
  const user = useRecoilValue(userState);

  return (
    <main className="container mx-auto mt-4 px-4">
      <section className="mb-8 p-4">
        <form action={`${type}`}>
          <div className="font-semibold text-xl">{data?.title}</div>
          <div className="text-right text-gray-400">
            작성자 : {data?.user?.name}
          </div>
          <div className="mb-4">
            <div>
              <pre className="font-roboto w-full p-2 whitespace-pre-wrap">
                {data?.content}
              </pre>
            </div>
            <hr />
          </div>
          <div className="flex justify-end my-4">
            <Link
              to={`/${type}`}
              className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded"
            >
              목록
            </Link>
            {user?._id === data?.user._id && (
              <>
                <Link
                  to={`/${type}/${_id}/edit`}
                  className="bg-gray-900 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded"
                >
                  수정
                </Link>
                <Submit bgColor="red">삭제</Submit>
              </>
            )}
          </div>
        </form>
      </section>

      {isLoading && <Spinner.TargetArea />}

      <CommentList />
    </main>
  );
}
