import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from '../src/components/Login/Login.jsx'
import Books from './components/Books/Books.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/book",
        element:<Books></Books>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
