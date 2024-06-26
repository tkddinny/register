import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Register from './Page/Register.jsx'
import Login from './Page/Login.jsx'
import Home from './Page/Home.jsx'

const router = createBrowserRouter(
  [
    {
      path:'/',
      element: <App />,
      children:[
        {
          path:'/',
          element:<Register />
        },
        {
          path:'/login',
          element:<Login />
        },
        {
          path:'/home',
          element:<Home />
        }
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
