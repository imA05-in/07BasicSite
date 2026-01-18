import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {About, Contact, Home, Login, Singup} from './components/components.js'

import {createBrowserRouter,createRoutesFromElements, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"home",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"signup",
        element:<Singup/>
      },
      {
        path:"contact",
        element:<Contact/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    <App />
    </RouterProvider>
  </StrictMode>,
)
