import { useLoaderData } from 'react-router-dom'
import { apiFetch } from '../../../lib/apiFetch'
import type { LoaderFunctionArgs } from 'react-router-dom'
import type { Project, Todo } from '../../../type'
import CreateTodoRedirect from './CreateTodoRedirect'

type LoaderData = {
  project: Project
  todos: Todo[]
}

export const projectRedirectLoader = async ({ params, request }: LoaderFunctionArgs): Promise<LoaderData> => {
  const projectId = params.projectId
  const [project, rawTodos] = await Promise.all([
    apiFetch<Project>(`/projects/${projectId}`, { signal: request.signal }),
    apiFetch<Todo[]>(`/projects/${projectId}/todos`, { signal: request.signal }),
  ])
  const todos = rawTodos.map(t => ({
    ...t,
    due: new Date(t.due as unknown as string),
    createdAt: new Date(t.createdAt as unknown as string),
  }))
  return { project, todos }
}

export default function ProjectRedirect() {
  const { project, todos } = useLoaderData() as LoaderData
  return (
    <div>
      <h1>{project.title}</h1>
      <CreateTodoRedirect />
      {todos.map(t => {
        return (
          <div key={t.todoId}>
            <p>{t.title}</p>
            <p>{t.due.toDateString()}</p>
          </div>
        )
      })}
    </div>
  )
}
