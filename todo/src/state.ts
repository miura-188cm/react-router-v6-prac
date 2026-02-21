import { atom } from "jotai"
import { atomFamily } from "jotai/utils"
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
export const todoByProjectIdAtom = atomFamily((projectId: string) =>
  atom(get => get(todoAtom).filter(todo => todo.projectId === projectId))
)

const projects: Project[] = [
  {
    id: 'test',
    title: 'test project',
    createdAt: new Date()
  }
]
export const projectAtom = atom<Project[]>(projects)

export const projectByIdAtom = atomFamily((projectId: string) =>
  atom<Project>(get => {
    const project = get(projectAtom).find(p => p.id === projectId)
    if (!project) {
      throw new Error('Project not found')
    }
    return project
  })
)
