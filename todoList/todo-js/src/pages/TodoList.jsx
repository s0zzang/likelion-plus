import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const TodoList = ({ data, refetch }) => {
  const items = data?.map((item) => (
    <TodoItem key={item.id} item={item} refetch={refetch} />
  ));
  return <ul>{items}</ul>;
};

TodoList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      done: PropTypes.bool,
    })
  ),
  refetch: PropTypes.func,
};

export default TodoList;
