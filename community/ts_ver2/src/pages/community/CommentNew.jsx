import InputError from "@/components/InputError";
import Submit from "@/components/Submit";
import { userState } from "@/recoil/user/atoms";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

const SERVER = import.meta.env.VITE_API_SERVER;
async function addComment(postId, formData, accessToken) {
  const res = await fetch(`${SERVER}/posts/${postId}/replies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(formData),
  });

  return res.json();
}

export default function CommentNew() {
  // 📍 리액트쿼리 훅) 댓글 목록 새로고침
  const queryClient = useQueryClient();

  const { type, _id } = useParams();
  const user = useRecoilValue(userState);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate } = useMutation({
    mutationFn(formData) {
      return addComment(_id, formData, user.accessToken);
    },
    onSuccess(resData) {
      if (resData.ok)
        // 📍 댓글 목록 새로고침 : 캐시 무효화
        queryClient.invalidateQueries({
          queryKey: [type, _id, "replies"],
        });
      else console.error(resData.message);
    },
    onError(err) {
      console.error(err);
    },
  });

  return (
    <div className="p-4 border border-gray-200 rounded-lg">
      <h4 className="mb-4">새로운 댓글을 추가하세요.</h4>
      <form action="#" onSubmit={handleSubmit(mutate)}>
        <div className="mb-4">
          <textarea
            rows="3"
            cols="40"
            className="block p-2 w-full text-sm border rounded-lg border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="내용을 입력하세요."
            {...register("content", {
              required: "내용을 입력해주세요.",
              minLength: {
                value: 2,
                message: "2글자 이상 입력해주삼",
              },
            })}
          ></textarea>
          <InputError target={errors.content} />
        </div>
        <Submit size="sm">댓글 등록</Submit>
      </form>
    </div>
  );
}
