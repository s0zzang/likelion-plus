"use client";
import Anchor from "@/components/Anchor";
import Button from "@/components/Button";
import InputError from "@/components/InputError";
import { signup } from "@/data/actions/userAction";
import { UserForm } from "@/types";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const SignupForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<UserForm>();

  const addUser = async (formData: UserForm) => {
    const userData = new FormData();
    // Object.entries(formData).forEach(([key, value]) => {
    //   if (key !== "attach") userData.append(key, value as string);
    // });
    // userData.append('attach', formData.attach[0] as file)

    const resData = await signup(formData);
    if (resData.ok) {
      alert(`${resData.item.name}님 회원 가입을 환영합니다.`);
      router.push("/");
    } else {
      if ("errors" in resData) {
        resData.errors.forEach((error) =>
          setError(error.path, { message: error.msg })
        );
      } else if (resData.message) {
        alert(resData.message);
      }
    }
  };

  return (
    <form action="/" onSubmit={handleSubmit(addUser)}>
      <div className="mb-4">
        <label
          className="block text-gray-700 dark:text-gray-200 mb-2"
          htmlFor="name"
        >
          이름
        </label>
        <input
          type="text"
          id="name"
          placeholder="이름을 입력하세요"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
          {...register("name", {
            required: "이름을 입력하세요.",
            minLength: {
              value: 2,
              message: "이름을 두 글자 이상 입력하세요.",
            },
          })}
        />
        <InputError target={errors.name} />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 dark:text-gray-200 mb-2"
          htmlFor="email"
        >
          이메일
        </label>
        <input
          type="email"
          id="email"
          placeholder="이메일을 입력하세요"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
          {...register("email", {
            required: "이메일을 입력하세요.",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "이메일 형식이 올바르지 않습니다.",
            },
          })}
        />
        <InputError target={errors.email} />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 dark:text-gray-200 mb-2"
          htmlFor="password"
        >
          비밀번호
        </label>
        <input
          type="password"
          id="password"
          placeholder="비밀번호를 입력하세요"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
          {...register("password", {
            required: "비밀번호를 입력하세요.",
          })}
        />
        <InputError target={errors.password} />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 dark:text-gray-200 mb-2"
          htmlFor="attach"
        >
          프로필 이미지
        </label>
        <input
          type="file"
          id="attach"
          accept="image/*"
          placeholder="이미지를 선택하세요"
          className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700"
          {...register("attach")}
        />
      </div>

      <div className="mt-10 flex justify-center items-center">
        <Button type="submit">회원가입</Button>
        <Anchor href="/" color="black">
          취소
        </Anchor>
      </div>
    </form>
  );
};

export default SignupForm;
