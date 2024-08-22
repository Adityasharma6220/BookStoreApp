import React from 'react'
import Home from './Components/Home'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Course from './Components/Course'
import Contact from './Components/Contact'
import About from './Components/About'
import Courses from './courses/Courses'
import Signup from './Components/Signup'


const App = () => {
let routes =createBrowserRouter([
  

  {
    path : "/",
    element : <Home/>

  },

  {
    path :"/course",
    element : <Courses/>
  },
  {
    path :"/contact",
    element : <Contact/>
  },
  {
    path :"about",
    element: <About/>
  },
  {
    path:"/signup",
    element  :<Signup/>
  },
])
 return (
  <div>
    <RouterProvider router={routes}/>
  </div>
 )
}

export default App



// let routes = createBrowserRouter([
//     {
//       path: "/",
//       element: <Layout/>,
//       children: [
//         {
//           path: "/",
//           element: <Home/>,
//         },
//         {
//           path: "/course",
//           element:  <Course/>,
//         },
//         {
//           path: "/contact",
//           element: <Contact/>,
//         },
//         {
//           path: "/about",
//           element: <About/>,
//         },
//       ],
//     },
//   ]);
//   return (
//     <div>
//       <RouterProvider router={routes}></RouterProvider>
//     </div>
//   );
