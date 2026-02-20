import { atom } from "jotai"
import type { Todo } from "./type"
const todos: Todo[] = [
  {
    id: 'test',
    title: 'first',
    due: new Date(),
    created_at: new Date()
  }
]
export const todoAtom = atom<Todo[]>(todos)
