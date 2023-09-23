import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { todoState } from "../atom";

// type정의
interface IForm {
  toDo: string;
}

const CreateTodo = () => {
  const setToDoList = useSetRecoilState(todoState);

  // 유효성 검사
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IForm>();

  // 제출 폼
  const onSubmit = ({ toDo }: IForm) => {
    setToDoList((prevTodo) => [
      { text: toDo, id: Date.now(), category: "TODO" },
      ...prevTodo,
    ]);
    setValue("toDo", "");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="오늘 할 일"
        {...register("toDo", {
          required: "Please write the Todo",
        })}
      />
      <span>{errors.toDo?.message}</span>
      <button type="submit">등록</button>
    </form>
  );
};

export default CreateTodo;
