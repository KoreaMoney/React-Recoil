import React, { useState } from "react";

const TodoList = () => {
  const [toDo, setToDo] = useState("");

  const onChangeTodoList = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setToDo(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(toDo);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          placeholder="오늘 할 일"
          onChange={onChangeTodoList}
        />
        <button>등록</button>
      </form>
    </div>
  );
};

export default TodoList;
