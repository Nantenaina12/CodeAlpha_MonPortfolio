import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider, } from 'react-router-dom';
import './index.css';
import App from './App.jsx'

//pages
import Home from './pages/Home.jsx';;
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Expérience from './pages/Expérience.jsx';
import Contact from './pages/Contact.jsx';

// Création des routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Layout global
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Projects /> },
      { path: "/experience", element: <Expérience /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
