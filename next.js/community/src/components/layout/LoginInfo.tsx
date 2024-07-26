"use client";

import { signOut } from "next-auth/react";
import Button from "../Button";
import Image from "next/image";

const LoginInfo = ({
  name,
  image,
}: {
  name: string;
  image?: string | null | undefined;
}) => {
  return (
    <form action={() => signOut()}>
      <p className="flex items-center">
        {image && (
          <Image
            className="w-8 rounded-full mr-2"
            src={`${image}`}
            width="40"
            height="40"
            alt="프로필 이미지"
          />
        )}
        {name}님 :)
        <Button type="submit">로그아웃</Button>
      </p>
    </form>
  );
};

export default LoginInfo;
