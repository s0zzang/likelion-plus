import Submit from "@components/Submit";

interface Props {
  keyword: string;
  setKeyword: (keyword: string) => void;
}

const Search = ({ keyword, setKeyword }: Props) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        className="dark:bg-gray-600 bg-gray-100 p-1 rounded"
        type="text"
        name="keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Submit>검색</Submit>
    </form>
  );
};

export default Search;
