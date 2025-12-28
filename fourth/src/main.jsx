import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter } from 'react-router'
// import {createRoutesFromElements} from 'react-router'
import Layout from './Layout.jsx'
import {Home, About, Contact, User, Github} from './components'
import githubInfoLoader from './hooks/githubInfoLoader.js'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path : "user/:userid",
        element : <User/>,
      },
      {
        path : "github",
        loader : githubInfoLoader,
        element : <Github/>
      }
    ]
  }
])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<Home />} />
//       <Route path='about' element={<About />} />
//       <Route path='contact' element={<Contact />} />
//       <Route path='user/:userid' element={<User />} />
//       <Route 
//       loader={githubInfoLoader}
//       path='github' 
//       element={<Github />}
//        />
//     </Route>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
