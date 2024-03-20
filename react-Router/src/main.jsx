import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  RouterProvider ,
  createBrowserRouter ,
  Route,
  createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout'
import Home from './Home/Home'
import About from './About/About'
import Contact from './Contact/Contact'
import User from './User/User'
import Github from './Github/Github'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element : <Layout/>,
//     children : [
//       {
//         path:"",
//         element : <Home/>
//       },
//       {
//         path:"About",
//         element : <About/>
//       },
//       {
//         path: "Contact",
//         element : <Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
      <Route  path='' element = {<Home/>}/>
      <Route path='About' element = {<About/>}/>
      <Route  path='Contact' element = {<Contact/>}/>
      <Route path='Github' element={<Github/>}/>
      <Route  path='User/:userid' element = {<User/>}/>
    </Route>

  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
