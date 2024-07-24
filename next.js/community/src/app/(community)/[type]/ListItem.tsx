import { Post } from "@/types/post";
import Link from "next/link";

const ListItem = ({ item }: { item: Post }) => {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
      <td className="p-2 text-center">{item?._id}</td>
      <td className="p-2 truncate indent-4">
        <Link href={`/${item?.type}/${1}`} className="cursor-pointer">
          {item?.title}
        </Link>
      </td>
      <td className="p-2 text-center truncate">{item?.user?.name}</td>
      <td className="p-2 text-center hidden sm:table-cell">{item?.views}</td>
      <td className="p-2 text-center hidden sm:table-cell">
        {item?.replies?.length || 0}
      </td>
      <td className="p-2 truncate text-center hidden sm:table-cell">
        {item?.updatedAt}
      </td>
    </tr>
  );
};

export default ListItem;
