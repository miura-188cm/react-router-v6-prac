export type Todo = {
  projectId: string
  todoId: string
  title: string
  due: Date
  createdAt: Date
}

export type Project = {
  id: string
  title: string
  createdAt: Date
}