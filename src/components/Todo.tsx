import { useSetRecoilState } from "recoil";
import { ITodo, todoState } from "../atom";
import dayjs from "dayjs";

const Todo = ({ text, id, category }: ITodo) => {
  const date = dayjs(id).format("YYYY-MM-DD HH:mm:ss");

  const setTodoList = useSetRecoilState(todoState);

  const handleChangeCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setTodoList((prev) => {
      const index = prev.findIndex((todo) => todo.id === id);
      const newCategory = { text, id, category: name as any };
      return [...prev.slice(0, index), newCategory, ...prev.slice(index + 1)];
    });
  };

  return (
    <ul>
      <li
        style={{
          fontWeight: "400",
        }}
      >
        <span>
          {category}: {text} ( {date} )
        </span>
        {category !== "TODO" && (
          <button name="TODO" onClick={handleChangeCategory}>
            Todo
          </button>
        )}
        {category !== "DOING" && (
          <button name="DOING" onClick={handleChangeCategory}>
            Doing
          </button>
        )}
        {category !== "DONE" && (
          <button name="DONE" onClick={handleChangeCategory}>
            Done
          </button>
        )}
      </li>
    </ul>
  );
};

export default Todo;
