import React, { useState } from "react";
import { useForm } from "react-hook-form";

const TodoList = () => {
  //유효성 검사
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [toDo, setToDo] = useState("");

  const onChangeTodoList = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setToDo(value);
  };

  const onSubmit = (data: any) => {
    console.log(toDo);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "250px",
          marginTop: "10px",
        }}
      >
        <input
          value={toDo}
          placeholder="오늘 할 일"
          onChange={onChangeTodoList}
        />
        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default TodoList;
