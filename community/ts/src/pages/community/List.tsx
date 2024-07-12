import Button from "@components/Button";
import useFetch from "@hooks/useFetch";
import useDebounce from "@hooks/useDebounce";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import Search from "@components/Search";
import Pagination from "@components/Pagination";
import { useSearchParams } from "react-router-dom";
import { PostData } from "#types/type";

const List = () => {
  const limit = 10;
  const { type } = useParams();
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const { data, totalPage, refetch } = useFetch<PostData[]>(
    `/posts?type=${type}&limit=${limit}&page=${page}&keyword=${keyword}`
  );

  const debouncedKeyword = useDebounce(keyword);

  useEffect(() => {
    refetch();
  }, [type, debouncedKeyword, page]);

  useEffect(() => {
    setKeyword("");
  }, [type]);

  useEffect(() => {
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  }, [debouncedKeyword]);

  return (
    <main className="min-w-80 p-10">
      <div className="text-center py-4">
        <h2 className="pb-4 text-2xl font-bold text-gray-700 dark:text-gray-200">
          {type === "sozzang"
            ? "짜장이네"
            : type === "info"
            ? "바덕이네"
            : "희선이네"}
        </h2>
      </div>
      <div className="flex justify-end mr-4">
        <Search keyword={keyword} setKeyword={setKeyword} />
        <Button onClick={() => navigate(`/${type}/new`)}>글작성</Button>
      </div>
      <section className="pt-10">
        <table className="border-collapse w-full table-fixed">
          <colgroup>
            <col className="w-[10%] sm:w-[10%]" />
            <col className="w-[60%] sm:w-[30%]" />
            <col className="w-[30%] sm:w-[15%]" />
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
              data?.map((item, idx) => (
                <ListItem item={item} key={idx} type={type || ""} />
              ))
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
        <Pagination type={type || ""} totalPages={totalPage} />
      </section>
    </main>
  );
};

export default List;
