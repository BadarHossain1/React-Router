import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home.jsx';
import About from './About.jsx';
import Contact from './components/home/Contact.jsx';
import Users from './components/home/Users.jsx';
import User from './components/home/User/User.jsx';
import UserDetails from './components/home/User/UserDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      }
      ,
      {
        path: "/users",
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      }
      ,{
        path: "/users/:userId",
        loader: ({params}) =>  fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
