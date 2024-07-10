import Button from "@components/Button";
import { Link, useSearchParams } from "react-router-dom";

const Pagination = ({ type, setPage, totalPages = 1 }) => {
  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get("page") || 1;

  const list = [...new Array(totalPages)].map((_, i) => (
    <Link to={`/${type}?page=${i + 1}`} key={i}>
      <Button
        onClick={() => setPage(i + 1)}
        size="sm"
        bgColor={currentPage == i + 1 ? "orange" : "gray"}
      >
        {i + 1}
      </Button>
    </Link>
  ));
  return (
    <div>
      <ul className="flex justify-center m-4">{list}</ul>
    </div>
  );
};

export default Pagination;
