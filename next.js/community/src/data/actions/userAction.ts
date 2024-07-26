"use server"; // 서버 액션 정의
import { ApiResWithValidation, SingleItem, UserData, UserForm } from "@/types";

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;

type LoginForm = {
  email: string;
  password: string;
};

export async function signup(formData: UserForm) {
  // 이미지 업로드
  if (formData.attach !== undefined && formData.attach.length > 0) {
    const body = new FormData();
    body.append("attach", formData.attach[0]);
    const fileRes = await fetch(`${SERVER}/files`, {
      method: "POST",
      body,
    });
    const fileJSON = await fileRes.json();
    if (!fileJSON.ok) throw new Error("파일 업로드 실패!");
    formData.profileImage = fileJSON.item[0].path;
  }
  delete formData.attach;

  // 회원 가입
  formData.type = "user";

  const res = await fetch(`${SERVER}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const resData: ApiResWithValidation<
    SingleItem<UserData>,
    UserForm
  > = await res.json();

  return resData;
}

// 📍 auth.ts에서 한 번에 호출하기 위해 삭제
// export async function login(
//   loginData: FormData
// ): Promise<ApiResWithValidation<SingleItem<UserData>, LoginForm>> {
//   const res = await fetch(`${SERVER}/users/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(loginData),
//   });

//   return res.json();
// }
