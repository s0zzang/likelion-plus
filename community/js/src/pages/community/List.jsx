import Submit from "@components/Submit";
import Button from "@components/Button";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const List = () => {
  const { type } = useParams();
  const { data, refetch } = useFetch(`/posts?type=${type}`);

  useEffect(() => {
    refetch();
  }, [type]);

  return (
    <main className="min-w-80 p-10">
      <div className="text-center py-4">
        <h2 className="pb-4 text-2xl font-bold text-gray-700 dark:text-gray-200">
          정보 공유
        </h2>
      </div>
      <div className="flex justify-end mr-4">
        {/* 검색 */}
        <form
          onSubmit={(event) => {
            event.preventDefault();
            location.href = "";
          }}
        >
          <input
            className="dark:bg-gray-600 bg-gray-100 p-1 rounded"
            type="text"
            name="keyword"
          />
          <Submit>검색</Submit>
        </form>
        <Button onClick={() => (location.href = "/info/new")}>글작성</Button>
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
            {/* 로딩 상태 표시 */}
            {/*
          <tr>
            <td colSpan="6" className="py-20 text-center">로딩중...</td>
          </tr>
        */}

            {/* 에러 메세지 출력 */}
            {/*
          <tr>
            <td colSpan="6" className="py-20 text-center">에러 메세지</td>
          </tr>
        */}

            {/* 본문 출력 */}
            {data?.length ? (
              data?.map((item, idx) => {
                return (
                  <tr
                    key={item.createdAt}
                    className="border-b border-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 ease-in-out"
                  >
                    <td className="p-2 text-center">{idx + 1}</td>
                    <td
                      className="p-2 truncate indent-4 cursor-pointer"
                      onClick={() => (location.href = `/info/${item._id}`)}
                    >
                      {item.title}
                    </td>
                    <td className="p-2 text-center truncate">
                      {item.user.name}
                    </td>
                    <td className="p-2 text-center hidden sm:table-cell">
                      {item.views}
                    </td>
                    <td className="p-2 text-center hidden sm:table-cell">
                      {item.repliesCount}
                    </td>
                    <td className="p-2 truncate text-center hidden sm:table-cell">
                      {item.createdAt}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={6} className="p-20 text-center">
                  게시글이 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <hr />

        {/* 페이지네이션 */}
        <div>
          <ul className="flex justify-center gap-3 m-4">
            <li className="text-bold text-blue-700">
              <a href="/info?page=1">1</a>
            </li>
            <li>
              <a href="/info?page=2">2</a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default List;
