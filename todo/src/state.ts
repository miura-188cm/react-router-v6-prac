import { atom } from "jotai"
import type { Todo, Project } from "./type"
const todos: Todo[] = [
  {
    projectId: 'test',
    todoId: 'test',
    title: 'first todo',
    due: new Date(),
    createdAt: new Date()
  }
]
export const todoAtom = atom<Todo[]>(todos)

const projects: Project[] = [
  {
    id: 'test',
    title: 'test project',
    createdAt: new Date()
  }
]
export const projectAtom = atom<Project[]>(projects)