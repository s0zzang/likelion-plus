"use client";
import Anchor from "@/components/Anchor";
import Button from "@/components/Button";
import {
  signInWithCredentials,
  signInWithGithub,
  signInWithGoogle,
} from "@/data/actions/authAction";
import Link from "next/link";

const LoginForm = () => {
  return (
    <form action={signInWithCredentials}>
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
        <Button type="submit" formAction={signInWithCredentials}>
          로그인
        </Button>
        <Anchor href="/signup" color="black">
          회원가입
        </Anchor>
        <Button type="submit" formAction={signInWithGoogle}>
          구글
        </Button>
        <Button type="submit" formAction={signInWithGithub}>
          깃헙
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
