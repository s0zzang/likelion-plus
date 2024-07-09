import Button from "@components/Button";
import { API_SERVER } from "@hooks/useFetch";
import { Link, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "@recoil/atoms";
import useMutation from "@hooks/useMutation";

const CommentItem = ({ item, refetch }) => {
  const { _id } = useParams();
  const user = useRecoilValue(userState);
  const { send } = useMutation(`/posts/${_id}/replies/${item._id}`, {
    method: "DELETE",
  });
  const profile = item.user.profile
    ? `${API_SERVER}/${
        item.user.profile instanceof Object
          ? item.user.profile.path
          : item.user.profile
      }`
    : "/favicon.png";

  const handleDelete = () => {
    send({
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token.accessToken}`,
      },
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
        <pre className="whitespace-pre-wrap text-sm">{item.content}</pre>
        {user._id === item.user._id && (
          <Button bgColor="red" size="sm" onClick={handleDelete}>
            삭제
          </Button>
        )}
      </div>
    </div>
  );
};

export default CommentItem;
