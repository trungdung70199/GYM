import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import Root from './routes/root';
import ErrorPage from './error-page';
import Contact from './routes/contact';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
const router = createBrowserRouter([
  {
    path:"/",
    element: <Root />,
    errorElement: <ErrorPage />,
    // Use children
    // children: [
    //   {
    //     path:"contacts/:contactId",
    //     element: <Contact />,
    //   },
    // ],
  },
  {
    path:"contacts/:contactId",
    element: <Contact />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
