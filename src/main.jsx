import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Header from './ui/Header/Header.jsx';
import Footer from './ui/Footer/Footer.jsx';
import Blog from './ui/Pages/Blog.jsx'
import About from './ui/Pages/About';
import Services from './ui/Pages/Services';
import Contacts from './ui/Pages/Contacts';
import Projects from './ui/Pages/Projects';

const Layout =()=>{
  return(
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:'/',
        element:<App/>
      },
      {
        path:'/blog',
        element:<Blog/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/services',
        element:<Services/>
      },
      {
        path:'/contacts',
        element:<Contacts/>
      },
      {
        path:'/projects',
        element:<Projects/>
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
