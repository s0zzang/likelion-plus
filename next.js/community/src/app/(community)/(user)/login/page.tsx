import Anchor from "@/components/Anchor";
import Button from "@/components/Button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `로그인 - 소짱컴`,
  openGraph: {
    title: "로그인",
    description: `로그인 후 멋사컴의 모든 서비스를 이용하세요.`,
    url: "https://community.fesp.shop/user/signup",
  },
};

const Page = () => {
  return (
    <main className="min-w-80 flex-grow flex items-center justify-center">
      <div className="p-8 border border-gray-200 rounded-lg w-full max-w-md dark:bg-gray-600 dark:border-0">
        <div className="text-center py-4">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
            로그인
          </h2>
        </div>

        <form method="post" action="/">
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-200 mb-2"
              htmlFor="email"
            >
              이메일
            </label>
            <input
              id="email"
              type="email"
              placeholder="이메일을 입력하세요"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
              name="email"
            />
            <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">
              이메일은 필수입니다.
            </p>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-200 mb-2"
              htmlFor="password"
            >
              비밀번호
            </label>
            <input
              id="password"
              type="password"
              placeholder="비밀번호를 입력하세요"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
              name="password"
            />
            <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">
              비밀번호는 필수입니다.
            </p>
            <Link
              href="#"
              className="block mt-6 ml-auto text-gray-500 text-sm dark:text-gray-300 hover:underline"
            >
              비밀번호를 잊으셨나요?
            </Link>
          </div>
          <div className="mt-10 flex justify-center items-center">
            <Button type="submit">로그인</Button>
            <Anchor href="/signup" color="black">
              회원가입
            </Anchor>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Page;
