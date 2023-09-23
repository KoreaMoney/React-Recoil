import Todo from "../components/Todo";
import CreateTodo from "../components/CreateTodo";
import { useRecoilValue } from "recoil";
import { todoState } from "../atom";

const TodoList = () => {
  const toDoList = useRecoilValue(todoState);

  return (
    <div>
      <h1
        style={{
          display: "flex",
          flexDirection: "column",
          width: "250px",
          marginTop: "10px",
        }}
      >
        Todo List
      </h1>
      <CreateTodo />
      <ul>
        {toDoList.map((list) => (
          <Todo key={list.id} {...list} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
