import { PostData } from "#types/type";
import { useNavigate } from "react-router-dom";

interface Props {
  item: PostData;
  type: string;
}

const ListItem = ({ item, type }: Props) => {
  const navigate = useNavigate();

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
      <td className="p-2 text-center">{item._id}</td>
      <td
        className="p-2 truncate cursor-pointer flex gap-1"
        onClick={() => navigate(`/${type}/${item._id}`)}
      >
        <p className="truncate">{item.title}</p>
        <span className="text-gray-400 flex-shrink-0">
          {item.repliesCount ? `(${item.repliesCount})` : ""}
        </span>
      </td>
      <td className="p-2 text-center truncate">{item.user.name}</td>
      <td className="p-2 text-center hidden sm:table-cell">{item.views}</td>
      <td className="p-2 truncate text-center hidden sm:table-cell">
        {item.createdAt}
      </td>
    </tr>
  );
};

export default ListItem;
