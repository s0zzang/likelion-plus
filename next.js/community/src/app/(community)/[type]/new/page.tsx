import Anchor from "@/components/Anchor";
import Button from "@/components/Button";
import { Metadata } from "next";
import Link from "next/link";

export function generateMetadata({
  params: { type },
}: {
  params: { type: string };
}): Metadata {
  return {
    title: `게시글 등록 - 소짱컴`,
    openGraph: {
      title: `게시글 등록 페이지`,
      description: `게시글을 등록하고 유용한 정보를 나누고 공유하세요.`,
      url: `https://community.fesp.shop/${type}/new`,
    },
  };
}

const Page = ({
  params: { type, id },
}: {
  params: { type: string; id: string };
}) => {
  return (
    <main className="min-w-[320px] p-4">
      <div className="text-center py-4">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200">
          게시글 등록
        </h2>
      </div>
      <section className="mb-8 p-4">
        <form action={`/${type}/${1}`} method="post">
          <div className="my-4">
            <label className="block text-lg content-center" htmlFor="title">
              제목
            </label>
            <input
              id="title"
              type="text"
              placeholder="제목을 입력하세요."
              className="w-full py-2 px-4 border rounded-md dark:bg-gray-700 border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              name="title"
            />
            <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">
              제목은 필수입니다.
            </p>
          </div>
          <div className="my-4">
            <label className="block text-lg content-center" htmlFor="content">
              내용
            </label>
            <textarea
              id="content"
              rows={15}
              placeholder="내용을 입력하세요."
              className="w-full p-4 text-sm border rounded-lg border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              name="content"
            ></textarea>
            <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">
              내용은 필수입니다.
            </p>
          </div>
          <hr />
          <div className="flex justify-end my-6">
            <Button type="submit">등록</Button>
            <Anchor href={`/${type}`} color="black">
              취소
            </Anchor>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Page;
