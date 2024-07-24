import { Post } from "@/types/post";
import { ApiRes, MultiItem } from "@/types/response";

const SERVER = process.env.API_SERVER;

export async function fetchPosts(
  type: string | undefined,
  page?: string,
  keyword?: string
): Promise<Post[]> {
  const params = new URLSearchParams();
  type && params.set("type", type);
  // 타입가드
  page && params.set("page", page);
  keyword && params.set("keyword", keyword);
  params.set("limit", process.env.LIMIT!);
  params.set("delay", process.env.DELAY!);

  const url = `${SERVER}/posts?${params.toString()}`;
  const res = await fetch(url); // Promise 객체 반환
  const resJson: ApiRes<MultiItem<Post>> = await res.json();
  if (!resJson.ok) throw new Error("게시물 목록 조회 실패");
  return resJson.item;
}
