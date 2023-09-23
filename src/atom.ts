import { atom } from "recoil";

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
