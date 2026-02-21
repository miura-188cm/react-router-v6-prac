import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, { loader as appLoader } from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProjectList, { loader as projectLoader } from './page/project/ProjectList.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: appLoader
  },
  {
    path: 'project/',
    element: <ProjectList />,
    loader: projectLoader

  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
