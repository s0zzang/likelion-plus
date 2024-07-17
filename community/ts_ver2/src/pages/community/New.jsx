import InputError from "@/components/InputError";
import Submit from "@/components/Submit";
import { userState } from "@/recoil/user/atoms";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

const SERVER = import.meta.env.VITE_API_SERVER;

async function addPost(type, formData, accessToken) {
  formData.type = type;
  const res = await fetch(`${SERVER}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(formData),
  });

  return res.json();
}

export default function New() {
  const { type } = useParams();
  const navigate = useNavigate();
  const user = useRecoilValue(userState);

  const { mutate } = useMutation({
    mutationFn(formData) {
      return addPost(type, formData, user?.accessToken);
    },
    onSuccess(resData) {
      // 📍 mutationFn 에러 없이 호출 성공
      if (resData.ok) {
        navigate(`/${type}`);
      } else {
        // 📍 네트워크 이외의 에러 (예시: authorization)
        console.error(resData.message);
      }
    },
    onError(err) {
      // 📍 네트워크 상 에러
      console.error(err);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <main className="min-w-[320px] p-4">
      <div className="text-center py-4">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200">
          게시글 등록
        </h2>
      </div>
      <section className="mb-8 p-4">
        <form action="/info/1" onSubmit={handleSubmit(mutate)}>
          <div className="my-4">
            <label className="block text-lg content-center" htmlFor="title">
              제목
            </label>
            <input
              id="title"
              type="text"
              placeholder="제목을 입력하세요."
              className="w-full py-2 px-4 border rounded-md dark:bg-gray-700 border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              {...register("title", { required: "제목을 입력하세요." })}
            />
            <InputError target={errors.title} />
          </div>
          <div className="my-4">
            <label className="block text-lg content-center" htmlFor="content">
              내용
            </label>
            <textarea
              id="content"
              rows="15"
              placeholder="내용을 입력하세요."
              className="w-full p-4 text-sm border rounded-lg border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              {...register("content", { required: "내용을 입력하세요." })}
            ></textarea>
            <InputError target={errors.content} />
          </div>
          <hr />
          <div className="flex justify-end my-6">
            <Submit>등록</Submit>
            <a
              href="/info"
              className="bg-gray-900 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded"
            >
              취소
            </a>
          </div>
        </form>
      </section>
    </main>
  );
}
