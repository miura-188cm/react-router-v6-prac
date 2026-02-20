import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


// import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page';
import Contact from './routes/Contact';
import Root, { loader as rootLoader, action as rootAction } from './routes/root';
import Test, { loader as testLoader } from './routes/Test';
import Index from './routes/Index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: 'contacts/:contactsId',
        element: <Contact />
      },
      {
        path: 'test',
        element: <Test />,
        loader: testLoader,
      },
      {
        index: true,
        element: <Index />
      }
    ]
  },

])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
