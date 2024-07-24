import { Metadata } from "next";
import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import Anchor from "@/components/Anchor";
import { fetchPosts } from "@/data/fetch/postFetch";
import ListItem from "./ListItem";
import model from "@/data/fetch/model";

export function generateMetadata({
  params: { type },
}: {
  params: { type: string };
}): Metadata {
  const boardTitle =
    type === "info"
      ? "정보 공유"
      : type === "free"
      ? "자유 게시판"
      : "질문 게시판";

  return {
    title: `${boardTitle} - 소짱컴`,
    openGraph: {
      title: `${boardTitle} 게시판`,
      description: `유용한 정보를 나누고 공유하세요.`,
      url: `https://community.fesp.shop/${type}`,
    },
  };
}

const Page = async ({
  params: { type, id },
}: {
  params: { type: string; id: string };
}) => {
  // 📍 API 서버 호출
  // const data = await fetchPosts(type);
  // 📍 직접 구현
  const data = await model.post.list(type);
  const list = data.map((item) => <ListItem key={item._id} item={item} />);

  const boardTitle =
    type === "info"
      ? "정보 공유"
      : type === "free"
      ? "자유 게시판"
      : "질문 게시판";
  return (
    <main className="min-w-80 p-10">
      <div className="text-center py-4">
        <h2 className="pb-4 text-2xl font-bold text-gray-700 dark:text-gray-200">
          {boardTitle}
        </h2>
      </div>
      <div className="flex justify-end mr-4">
        <Search />
        <Anchor href={`/${type}/new`} color="black">
          글작성
        </Anchor>
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
          <tbody>{list}</tbody>
        </table>
        <hr />

        <Pagination />
      </section>
    </main>
  );
};

export default Page;
