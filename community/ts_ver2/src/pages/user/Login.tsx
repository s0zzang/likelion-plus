import InputError from "@/components/InputError";
import Submit from "@/components/Submit";
import { userState } from "@/recoil/user/atoms";
import { ApiResWithValidation, SingleItem } from "@/types/response";
import { User } from "@/types/user";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

const SERVER = import.meta.env.VITE_API_SERVER;

type LoginForm = {
  email: string;
  password: string;
};

async function login(
  formData: LoginForm
): Promise<ApiResWithValidation<SingleItem<User>, LoginForm>> {
  const res = await fetch(`${SERVER}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  return res.json();
}

export default function Login() {
  const setUser = useSetRecoilState(userState);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginForm>();

  const { mutate: checkLogin } = useMutation<
    ApiResWithValidation<SingleItem<User>, LoginForm>,
    Error,
    LoginForm
  >({
    retry: 3, // 네트워크 에러가 발생하면 retry
    mutationFn(formData) {
      return login(formData);
    },
    onSuccess(resData) {
      // resData: ApiResWithValidation<SingleItem<User>, LoginForm>
      // 📍 로그인 성공
      if (resData.ok) {
        // resData.ok로 타입 가드 완. -> resData: SingleItem<User>
        setUser({
          _id: resData.item._id,
          name: resData.item.name,
          profile: resData.item.profileImage,
          // 'resData.item.token'은(는) 'undefined'일 수 있습니다. : 토큰 옵셔널 -> 단언
          accessToken: resData.item.token!.accessToken,
          refreshToken: resData.item.token!.refreshToken,
        });
        alert(`${resData.item.name}님 로그인 완.`);
        navigate("/");
      } else {
        // 📍 서버 에러 응답 : 로그인 실패(아이디, 비번 안맞음)
        if ("errors" in resData) {
          // resData: CoreErrorRes | AuthErrorRes | ValidationErrorRes<LoginForm>
          resData.errors.forEach((error) =>
            setError(error.path, {
              message: error.msg,
            })
          );
        } else if (resData.message) {
          // resData: CoreErrorRes | AuthErrorRes | ValidationErrorRes<LoginForm>
          alert(resData.message);
        }
      }
    },
    onError(err) {
      // 📍 네트워크 에러
      console.log(err.message);
      alert("잠시 후 다시 이용해주세요.");
    },
  });

  return (
    <main className="min-w-80 flex-grow flex items-center justify-center">
      <div className="p-8 border border-gray-200 rounded-lg w-full max-w-md dark:bg-gray-600 dark:border-0">
        <div className="text-center py-4">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
            로그인
          </h2>
        </div>

        <form
          action="/"
          onSubmit={handleSubmit((formData) => checkLogin(formData))}
        >
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
              id="password"
              type="password"
              placeholder="비밀번호를 입력하세요"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
              {...register("password", {
                required: "비밀번호를 입력하세요.",
              })}
            />
            <InputError target={errors.password} />
            <Link
              to="#"
              className="block mt-6 ml-auto text-gray-500 text-sm dark:text-gray-300 hover:underline"
            >
              비밀번호를 잊으셨나요?
            </Link>
          </div>
          <div className="mt-10 flex justify-center items-center">
            <Submit>로그인</Submit>
            <Link
              to="/user/signup"
              className="ml-8 text-gray-800 hover:underline"
            >
              회원가입
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
