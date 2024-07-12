import Button from "@components/Button";
import { API_SERVER } from "@hooks/useFetch";
import { Link, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "@recoil/atoms";
import useMutation from "@hooks/useMutation";
import { useRef, useState } from "react";
import { PostData } from "#types/type";

interface Props {
  item: PostData;
  refetch: () => void;
}

const CommentItem = ({ item, refetch }: Props) => {
  const { _id } = useParams();
  const user = useRecoilValue(userState);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { send } = useMutation(`/posts/${_id}/replies/${item._id}`);
  const profile = item.user.profile
    ? `${API_SERVER}/${
        item.user.profile instanceof Object
          ? item.user.profile.path
          : item.user.profile
      }`
    : "/favicon.png";
  const [isEdit, setIsEdit] = useState(false);

  console.log(textareaRef, textareaRef.current);

  const handleDelete = () => {
    send({
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token.accessToken}`,
      },
      method: "DELETE",
    });
    refetch();
  };

  const handleEdit = () => {
    const content = textareaRef.current!.value;
    console.log(content);
    send({
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token.accessToken}`,
      },
      body: JSON.stringify({ content }),
      method: "PATCH",
    });
    refetch();
  };

  return (
    <div className="shadow-md rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <img
          className="w-8 mr-2 rounded-full object-cover aspect-square"
          src={profile}
          alt={`${item.user.name} 프로필 이미지`}
        />
        <Link to="" className="text-orange-400">
          {item.user.name}
        </Link>
        <time className="ml-auto text-gray-500" dateTime={item.createdAt}>
          {item.createdAt}
        </time>
      </div>
      <div className="flex justify-between items-center mb-2">
        {isEdit ? (
          <textarea
            name="content"
            id="content"
            rows={3}
            cols={40}
            className="block p-2 w-full text-sm border rounded-lg border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            defaultValue={item.content}
            ref={textareaRef}
          ></textarea>
        ) : (
          <pre className="whitespace-pre-wrap text-sm">{item.content}</pre>
        )}

        {user?._id === item.user._id && (
          <div className="flex-shrink-0">
            {isEdit ? (
              <>
                <Button size="sm" onClick={handleEdit}>
                  등록
                </Button>
                <Button
                  bgColor="gray"
                  size="sm"
                  onClick={() => setIsEdit(!isEdit)}
                >
                  취소
                </Button>
              </>
            ) : (
              <>
                <Button size="sm" onClick={() => setIsEdit(!isEdit)}>
                  수정
                </Button>
                <Button bgColor="red" size="sm" onClick={handleDelete}>
                  삭제
                </Button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentItem;
