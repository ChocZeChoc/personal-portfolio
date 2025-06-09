import React from 'react'
import Home from './components/Home/Home'
import Portfolio from './components/Portfolio/Portfolio'
import About from './components/About/About'
import Navbar from './components/Navbar/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router'


const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/About',
      element: <About />,
    },
    {
      path: '/Portfolio',
      element: <Portfolio />,
    }
  ])
  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />;
    </div>
    
  )
}

export default App

