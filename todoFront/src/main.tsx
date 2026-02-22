import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, { loader as appLoader } from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProjectList, { projectLoader } from './page/project/ProjectList.tsx'
import Project, { projectLoader as projectByIdLoader } from './page/project/id/Project.tsx'
import ProjectNotFound from './page/project/id/ProjectNotFound.tsx'

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
    errorElement: <ProjectNotFound />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
