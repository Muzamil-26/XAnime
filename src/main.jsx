import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import Main from './Components/main1.jsx'
import './index.css'
// import { SkeletonTheme } from "react-loading-skeleton";
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Aboutus from './Components/Aboutus.jsx';
import Genere_action from './Components/Genere_action.jsx';
import Adventure from './Components/adventure.jsx';
import Comdey from './Components/comedy.jsx';
import Contactus from './Components/Contactus.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },

  {
    path:"/home",
    element:<App/>,

  },
  {
    path:"/about",
    element:<Aboutus/>,
  },
  {
    path:"/genre/action",
    element:<Genere_action/>,
  },
  {
    path:"/genre/adventure",
    element:<Adventure/>,
  },
  {
    path:"/genre/comedy",
    element:<Comdey/>,
  },
  {
    path:"/contact",
    element:<Contactus/>,
  },

]
)

ReactDOM.createRoot(document.getElementById('root')).render(


     <RouterProvider router={router} />
  

)
