import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, { loader as appLoader } from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProjectList, { projectLoader } from './page/project/ProjectList.tsx'
import Project, { projectLoader as projectByIdLoader } from './page/project/id/Project.tsx'
import ProjectNotFound from './page/project/id/ProjectNotFound.tsx'
import { createTodoAction } from './page/project/id/CreateTodo.tsx'
import ProjectRedirect, { projectRedirectLoader } from './page/project/projectRedirect/ProjectRedirect.tsx'
import { createTodoRedirectAction } from './page/project/projectRedirect/CreateTodoRedirect.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: appLoader
  },
  {
    path: 'project/',
    element: <ProjectList />,
    loader: projectLoader,

  },
  {
    path: 'project/:projectId',
    element: <Project />,
    loader: projectByIdLoader,
    action: createTodoAction,
    errorElement: <ProjectNotFound />
  },
  {
    path: 'projectRedirect/:projectId',
    element: <ProjectRedirect />,
    loader: projectRedirectLoader,
    action: createTodoRedirectAction,
    errorElement: <ProjectNotFound />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
