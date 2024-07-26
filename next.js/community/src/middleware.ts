import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";

export default async function middleware(request: NextRequest) {
  console.log("미들웨어 호출", request.nextUrl.href);
  const session = await auth();

  // 📍 로그인 되지 않은 경우
  if (!session?.user)
    return NextResponse.redirect(`${request.nextUrl.origin}/login`);

  // 📍 공지사항 글 작성 페이지에 일반 유저 접근 시
  if (
    request.nextUrl.pathname.startsWith("/notice") &&
    session.user?.type !== "admin"
  )
    return NextResponse.redirect(`${request.nextUrl.origin}/`);
}

// 📍 옵션에 해당하는 경우 middleware 실행
export const config = {
  matcher: ["/:type/new"],
};
