import { atom } from "recoil";
/**
 * @Date 23.09.23.
 * @autor Kimdowon
 * @Return recoil의 atom과 selector내용 정리
 * 
 * Recoil은 왜 사용하는가?
 * 💻 
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
