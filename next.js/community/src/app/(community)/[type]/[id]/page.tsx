import Anchor from "@/components/Anchor";
import Button from "@/components/Button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CommentList from "./CommentList";

export function generateMetadata({
  params: { type, id },
}: {
  params: { type: string; id: string };
}): Metadata {
  return {
    title: `좋은 소식이 있습니다. - 소짱컴`,
    openGraph: {
      title: `좋은 소식이 있습니다.`,
      description: `좋은 소식을 가지고 왔습니다. 오늘 드디어...`,
      url: `https://community.fesp.shop/${type}/${id}`,
    },
  };
}

export async function generateStaticParams() {
  return [
    { type: "notice", id: "4" },
    { type: "notice", id: "5" },
  ];
}

const Page = ({
  params: { type, id },
}: {
  params: { type: string; id: string };
}) => {
  return (
    <main className="container mx-auto mt-4 px-4">
      <section className="mb-8 p-4">
        <form action={`/${type}`}>
          <div className="font-semibold text-xl">
            제목 : 좋은 소식이 있습니다.
          </div>
          <div className="text-right text-gray-400">작성자 : 제이지</div>
          <div className="mb-4">
            <div>
              <pre className="font-roboto w-full p-2 whitespace-pre-wrap">
                좋은 소식을 가지고 왔습니다.
                <br />
                오늘 드디어 최종 면접을 합니다.
                <br />
                많이 응원해 주세요^^
              </pre>
            </div>
            <hr />
          </div>
          <div className="flex justify-end my-4">
            <Anchor href={`/${type}`}>목록</Anchor>
            <Anchor href={`/${type}/${id}/edit`} color="black">
              수정
            </Anchor>
            <Button type="submit" color="red">
              삭제
            </Button>
          </div>
        </form>
      </section>

      <CommentList />
    </main>
  );
};

export default Page;
