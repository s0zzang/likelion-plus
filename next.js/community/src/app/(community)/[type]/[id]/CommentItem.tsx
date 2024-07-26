import { PostComment } from "@/types";
import Link from "next/link";

const CommentItem = ({ reply }: { reply: PostComment }) => {
  console.log(reply);
  return (
    <div className="shadow-md rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <img
          width={30}
          height={30}
          className="w-8 mr-2 rounded-full"
          src={`https://api.fesp.shop${reply?.user?.profile}`}
          alt={`${reply?.user?.name} 프로필 이미지`}
        />
        <Link href="" className="text-orange-400">
          {reply?.user?.name}
        </Link>
        <time className="ml-auto text-gray-500" dateTime="2024.07.02 14:11:22">
          {reply?.createdAt}{" "}
        </time>
      </div>
      <div className="flex justify-between items-center mb-2">
        <form action="#">
          <pre className="whitespace-pre-wrap text-sm">{reply?.content}</pre>
          <button
            type="submit"
            className="bg-red-500 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded"
          >
            삭제
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentItem;
