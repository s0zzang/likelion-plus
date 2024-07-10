import Button from "@components/Button";
import { API_SERVER } from "@hooks/useFetch";
import { Link, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "@recoil/atoms";
import useMutation from "@hooks/useMutation";
import { useRef, useState } from "react";

const CommentItem = ({ item, refetch }) => {
  const { _id } = useParams();
  const user = useRecoilValue(userState);
  const textareaRef = useRef();
  const { send } = useMutation(`/posts/${_id}/replies/${item._id}`);
  const profile = item.user.profile
    ? `${API_SERVER}/${
        item.user.profile instanceof Object
          ? item.user.profile.path
          : item.user.profile
      }`
    : "/favicon.png";
  const [isEdit, setIsEdit] = useState(false);

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
    const content = textareaRef.current.value;
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
            className="w-full rounded border-slate-400 border border-solid p-1 "
            defaultValue={item.content}
            ref={textareaRef}
          ></textarea>
        ) : (
          <pre className="whitespace-pre-wrap text-sm">{item.content}</pre>
        )}

        {user._id === item.user._id && (
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
