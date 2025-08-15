import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, createRoutesFromChildren, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

// Pages
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Expérience from './pages/Expérience.jsx';
import Contact from './pages/Contact.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="experience" element={<Expérience />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
