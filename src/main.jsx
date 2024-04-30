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
import CraftDetails from './Components/CraftDetails.jsx';
import UpdateCraft from './Components/UpdateCraft.jsx';
import SubCategoryCraft from './Components/SubCategoryCraft.jsx';

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
        element:<AllArtAndCraftItem></AllArtAndCraftItem>,
        loader:()=>fetch('https://fabby-server.vercel.app/allArtAndCraftItems')
        
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
        loader:({params})=>fetch(`https://fabby-server.vercel.app/craftItemviewDetails/${params.id}`)
      },
      {
        path:'/craftDetails/:id',
        element:<PrivateRoute><CraftDetails></CraftDetails></PrivateRoute>,
        loader:({params})=>fetch(`https://fabby-server.vercel.app/craftDetails/${params.id}`)
      },
      {
        path:'/updateCraft/:id',
        element:<PrivateRoute><UpdateCraft></UpdateCraft></PrivateRoute>,
        loader:({params})=>fetch(`https://fabby-server.vercel.app/updateCraft/${params.id}`)
        // loader:({params})=>fetch(`https://fabby-server.vercel.app/updateCraft/${params.id}`)
      },
      {
        path:'/subCategoryCraft/:id',
        element:<PrivateRoute><SubCategoryCraft></SubCategoryCraft></PrivateRoute>,
        loader:({params})=>fetch(`https://fabby-server.vercel.app/subCategoryCraft/${params.id}`)
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
