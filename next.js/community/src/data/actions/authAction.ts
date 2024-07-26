"use server";
import { signIn } from "@/auth";
import { redirect } from "next/navigation";

// email/password 로그인
export async function signInWithCredentials(formData: FormData) {
  try {
    const res = await signIn("credentials", {
      email: formData.get("email") || "",
      password: formData.get("password") || "",
      redirect: false, // 기본 리다이렉트 취소
    });
    console.log(res);
  } catch (err) {
    console.error(err);
  }
  // 📍 try 블럭 내에서 실행시 오류로 인식하여 catch 절로 넘어감
  redirect("/");
}
export async function signInWithGoogle(formData: FormData) {
  await signIn("google", { redirectTo: "/" });
}
export async function signInWithGithub(formData: FormData) {
  await signIn("github", { redirectTo: "/" });
}
