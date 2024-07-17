import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import Spinner from "@/components/Spinner";
import ListItem from "@/pages/community/ListItem";
import { Post } from "@/types/post";
import { ApiRes, MultiItem } from "@/types/response";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams, useSearchParams } from "react-router-dom";

async function fetchPosts(
  type: string,
  page: string | null,
  keyword: string | null
): Promise<ApiRes<MultiItem<Post>>> {
  const params = new URLSearchParams();
  params.set("type", type);
  // 📍 타입 가드
  page && params.set("page", page);
  keyword && params.set("keyword", keyword);
  params.set("limit", import.meta.env.VITE_LIMIT);
  params.set("delay", import.meta.env.VITE_DELAY);
  const url = `${import.meta.env.VITE_API_SERVER}/posts?${params.toString()}`;
  const res = await fetch(url);
  return res.json();
}

export default function List() {
  const { type } = useParams();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");
  const keyword = searchParams.get("keyword");

  const { isLoading, data } = useQuery({
    queryKey: [type, searchParams.toString()],
    // 📍 queryFn : 프라미스 반환 함수
    queryFn: () => fetchPosts(type!, page, keyword),
    staleTime: 1000 * 10, // 캐시가 유지되는 시간
  });

  let list: JSX.Element[] = [];
  if (data?.ok)
    list = data?.item?.map((item) => <ListItem key={item._id} item={item} />);

  return (
    <main className="min-w-80 p-10">
      <div className="text-center py-4">
        <h2 className="pb-4 text-2xl font-bold text-gray-700 dark:text-gray-200">
          정보 공유
        </h2>
      </div>
      <div className="flex justify-end mr-4">
        <Search />

        <Link
          to={`/${type}/new`}
          className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded"
        >
          글작성
        </Link>
      </div>
      <section className="pt-10">
        <table className="border-collapse w-full table-fixed">
          <colgroup>
            <col className="w-[10%] sm:w-[10%]" />
            <col className="w-[60%] sm:w-[30%]" />
            <col className="w-[30%] sm:w-[15%]" />
            <col className="w-0 sm:w-[10%]" />
            <col className="w-0 sm:w-[10%]" />
            <col className="w-0 sm:w-[25%]" />
          </colgroup>
          <thead>
            <tr className="border-b border-solid border-gray-600">
              <th className="p-2 whitespace-nowrap font-semibold">번호</th>
              <th className="p-2 whitespace-nowrap font-semibold">제목</th>
              <th className="p-2 whitespace-nowrap font-semibold">글쓴이</th>
              <th className="p-2 whitespace-nowrap font-semibold hidden sm:table-cell">
                조회수
              </th>
              <th className="p-2 whitespace-nowrap font-semibold hidden sm:table-cell">
                댓글수
              </th>
              <th className="p-2 whitespace-nowrap font-semibold hidden sm:table-cell">
                작성일
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={6}>
                  <div>
                    <Spinner.TargetArea />
                  </div>
                </td>
              </tr>
            ) : (
              list
            )}
          </tbody>
        </table>
        <hr />

        {data?.ok && <Pagination pagination={data.pagination} />}
      </section>
    </main>
  );
}
