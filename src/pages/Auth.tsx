import { useState } from "react";
import { useForm } from "react-hook-form";
interface FormData {
  email: string;
  password: string;
  password2: string;
  userName: string;
  errors: {
    email: {
      message: string;
    };
  };
  extraError?: string;
}
/**
 * React-hook-form
 * 사용이유
 * 1. 비제어 컴포넌트 방식으로 구현되어있기에 렌더링 이슈를 해결
 * 2. props drilling 없이 사용할 수 있다
 * 3. 데이터는 계속 동기화되며 분산되지 않아 데이터를 한 곳에서 관리 가능
 *
 * @author kimdowon
 * @Date 23.09.21.
 * @returns react hook form을 이용한 편리한 유효성 검사
 */
const Auth = () => {
  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [userName, setUserName] = useState("");
  // 유효성 검사
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  console.log(errors);
  const onSubmit = (data: FormData) => {
    if (data.password !== data.password2) {
      setError(
        "password2",
        { message: "Password are not the same" },
        { shouldFocus: true }
      );
    }
    // setError("extraError", { message: "Server offline" });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "250px",
        }}
      >
        <input
          placeholder="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "오직 네이버 이메일만 가능합니다.",
            },
          })}
        />
        <span>{errors.email?.message}</span>
        <input
          placeholder="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 4,
              message: "비밀번호가 너무 짧습니다. 4글자 이상입니다.",
            },
            maxLength: 10,
          })}
        />
        <span>{errors.password?.message}</span>
        <input
          placeholder="password2"
          {...register("password2", {
            required: "Password is required",
            minLength: {
              value: 4,
              message: "비밀번호가 너무 짧습니다. 4글자 이상입니다.",
            },
            maxLength: 10,
          })}
        />
        <span>{errors.password2?.message}</span>
        <input
          placeholder="userName"
          {...register("userName", {
            required: true,
            minLength: 2,
            maxLength: 10,
            validate: {
              noKorea: (value) =>
                value.includes("korea") ? "no korea-Name allowed" : true,
              noKim: (value) =>
                value.includes("kim") ? "no kim-Name allowed" : true,
            },
          })}
        />
        <span>{errors.userName?.message}</span>
        <button type="submit">로그인</button>
        {/* <span>{errors.extraError?.message}</span> */}
      </form>
    </div>
  );
};

export default Auth;
