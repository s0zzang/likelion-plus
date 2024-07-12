import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useMutation from "@hooks/useMutation";
import { API_SERVER } from "@hooks/useFetch";

const Signup = () => {
  const navigate = useNavigate();
  const { send } = useMutation(`/users`, { method: "POST" });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ email, password, name, profileImage }) => {
    // 1. 파일 업로드
    const imgFormData = new FormData();
    imgFormData.append("attach", profileImage[0]);
    const fileRes = await fetch(`${API_SERVER}/files`, {
      method: "POST",
      body: imgFormData,
    });
    const file = await fileRes.json();

    // 2. 업로드된 파일을 포함한 회원가입 데이터 전송
    await send({
      body: JSON.stringify({
        type: "user",
        email,
        password,
        name,
        profileImage: file.item[0].path,
      }),
    });
    navigate("/");
  };

  return (
    <main className="min-w-80 flex-grow flex items-center justify-center">
      <div className="p-8  border border-gray-200 rounded-lg w-full max-w-md dark:bg-gray-600 dark:border-0">
        <div className="text-center py-4">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200">
            회원 가입
          </h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
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
              name="name"
              {...register("name", { required: "이름을 입력하세요." })}
            />
            <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">
              {errors.name?.message}
            </p>
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
              name="email"
              {...register("email", {
                required: "이메일을 입력하세요.",
                pattern: {
                  value:
                    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                  message: "이메일 형식에 맞지 않습니다.",
                },
              })}
            />
            <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">
              {errors.email?.message}
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
              type="password"
              id="password"
              placeholder="비밀번호를 입력하세요"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
              name="password"
              {...register("password", {
                required: "비밀번호를 입력하세요.",
                minLength: {
                  value: 8,
                  message: "8자리 이상 입력하세요.",
                },
              })}
            />
            <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">
              {errors.password?.message}
            </p>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-200 mb-2"
              htmlFor="profileImage"
            >
              프로필 이미지
            </label>
            <input
              type="file"
              id="profileImage"
              accept="image/*"
              placeholder="이미지를 선택하세요"
              className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700"
              name="profileImage"
              {...register("profileImage")}
            />
          </div>

          <div className="mt-10 flex justify-center items-center">
            <button
              type="submit"
              className="bg-orange-500 py-1 px-4 text-white font-semibold ml-2 text-base hover:bg-amber-400 rounded"
            >
              회원가입
            </button>
            <button
              type="reset"
              className="bg-gray-900 py-1 px-4 text-white font-semibold ml-2 text-base hover:bg-amber-400 rounded"
              onClick={() => history.back()}
            >
              취소
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Signup;
