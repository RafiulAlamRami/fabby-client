import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx';
import AllArtAndCraftItem from './Components/AllArtAndCraftItem.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
// import AuthProvider from './Provider/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './Provider/AuthProvider.jsx';
import AddCraftItem from './Components/AddCraftItem.jsx';
import MyArtAndCraftList from './Components/MyArtAndCraftList.jsx';
import PrivateRoute from './Components/PrivateRoute.jsx';
import DetailsCraftItemSection from './Components/DetailsCraftItemSection.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/allArtAndCraftItems',
        element:<AllArtAndCraftItem></AllArtAndCraftItem>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/addCraftItem',
        element:<PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>
      },
      {
        path:'/myArtAndCraftList',
        element:<PrivateRoute><MyArtAndCraftList></MyArtAndCraftList></PrivateRoute>
      },
      {
        path:'/craftItemviewDetails/:id',
        element:<PrivateRoute><DetailsCraftItemSection></DetailsCraftItemSection></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/craftItemviewDetails/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer />
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
