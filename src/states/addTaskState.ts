import { atom, selector } from "recoil";
import { Task } from "../types/data";

const INITIAL_STATE: Task[] = [
  {
    id: 1,
    title: 'デフォルトのタスク１',
    isDone: false,
  },
  {
    id: 2,
    title: 'デフォルトのタスク２',
    isDone: false,
  },
]

export const addTaskState = atom<Task[]>({
  key: 'addTaskState',
  default: INITIAL_STATE,
});

export const addTaskStateLength = selector<number>({
  key: 'addTitleStateLength',
  get: ({ get }) => {
    // const addTitleNumber: Task[] = get(addTaskState);
    // return addTitleNumber.length || 0;
    return get(addTaskState)?.length || 0;
  }
})