import Todo from "../components/Todo";
import CreateTodo from "../components/CreateTodo";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, todoSelector, todoState } from "../atom";

const TodoList = () => {
  // const toDoList = useRecoilValue(todoState);
  const [category, setCategory] = useRecoilState(categoryState);
  // Recoil selector
  // const [todo, doing, done] = useRecoilValue(todoSelector);
  const todoCategory = useRecoilValue(todoSelector);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value);
  };

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
      <select value={category} onInput={onInput}>
        <option value="TODO">Todo</option>
        <option value="DOING">Doing</option>
        <option value="DONE">Done</option>
      </select>
      {/* atom만 있는 버전 */}
      <CreateTodo />
      {todoCategory?.map((list) => (
        <Todo key={list.id} {...list} />
      ))}
      {/* {category === "TODO" &&
        todo.map((list) => <Todo key={list.id} {...list} />)}
      {category === "DOING" &&
        doing.map((list) => <Todo key={list.id} {...list} />)}
      {category === "DONE" &&
        done.map((list) => <Todo key={list.id} {...list} />)} */}
      {/* selector버전 */}
      {/* <h2>Todo</h2>
      <ul>
        {todo.map((list) => (
          <Todo key={list.id} {...list} />
        ))}
      </ul>
      <h2>Doing</h2>
      <ul>
        {doing.map((list) => (
          <Todo key={list.id} {...list} />
        ))}
      </ul>
      <h2>Done</h2>
      <ul>
        {done.map((list) => (
          <Todo key={list.id} {...list} />
        ))}
      </ul> */}
    </div>
  );
};

export default TodoList;
