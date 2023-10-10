import React from 'react'
import ReactDOM from 'react-dom/client'
import AboutMe from './components/AboutMe.jsx'
import Experiences from './components/Experiences.jsx'
import Projects from './components/Projects.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element:
    <div>
      <AboutMe />
    </div>
  },
  {
    path: '/experiences',
    element:
    <div>
      <Experiences />
    </div>
  },
  {
    path: '/projects',
    element:
    <div>
      <Projects />
    </div>
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
