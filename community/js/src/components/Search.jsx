import Submit from "@components/Submit";
import { useRef } from "react";

const Search = ({ keyword, setKeyword }) => {
  const searchRef = useRef();
  const handleSearch = (e) => {
    e.preventDefault();
    setKeyword(searchRef.current.value);
  };
  return (
    <form onSubmit={handleSearch}>
      <input
        className="dark:bg-gray-600 bg-gray-100 p-1 rounded"
        type="text"
        name="keyword"
        value={keyword}
        // TODO: debounce 추가하기
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Submit>검색</Submit>
    </form>
  );
};

export default Search;
