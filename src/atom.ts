import { atom, selector } from "recoil";
/**
 * @Date 23.09.23.
 * @autor Kimdowon
 * @Return recoil의 atom과 selector내용 정리
 *
 * Recoil은 왜 사용하는가?
 * 💻 Recoil은 상태관리 라이브러리 이다.
 * 💻 상태관리를 한 곳에서 관리하여 상태를 공유하고 관리하는 것에 용이하다.
 * 💻 상태 업데이트에 최적화되어 있어 컴포넌트의 렌더링 성능을 개선할 수 있다.
 * 💻 간편하게 비동기적 상태관리를 업데이트하고 처리할 수 있다.
 *
 * 👨‍💻 Atom은 무엇일까?
 * 1. 상태의 단위이다.
 * 2. 업데이트된 상태를 새로운 값으로 반영하고 다시 렌더링되게 하는 역할을 한다.
 * 3. atom을 사용하는 모든 컴포넌트에 상태를 공유한다.
 *
 * 👨‍💻 Selector은 무엇일까?
 * 1. atom이나 다른 selector를 입력받아 처리 할 수 있는 순수함수이다.
 * 2. atom처럼 selector의 값이 변경되면 다시 렌더링이 된다.
 * 3. selector에 명시한 함수를 통해서 불필요한 상태 보존을 방지한다.
 * 4. 비동기적 처리방식으로 진행한다.
 */

export interface ITodo {
  text: string;
  id: number;
  category: "TODO" | "DOING" | "DONE";
}

// Recoil atom
export const todoState = atom<ITodo[]>({
  key: "todoState",
  default: [],
});

export const categoryState = atom({
  key: "category",
  default: "TODO",
});

// Recoil Selector
export const todoSelector = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const todoList = get(todoState);
    const category = get(categoryState);
    if (category === "TODO")
      return todoList.filter((todo) => todo.category === "TODO");
    if (category === "DOING")
      return todoList.filter((todo) => todo.category === "DOING");
    if (category === "DONE")
      return todoList.filter((todo) => todo.category === "DONE");
  },
});
