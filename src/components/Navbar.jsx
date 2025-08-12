import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
        <nav style={{ padding: "10px", background: "#222", color: "#fff" }}>
            <Link to="/" style={{ marginRight: "10px", color: "#fff" }}>Accueil</Link>
            <Link to="/about" style={{ marginRight: "10px", color: "#fff" }}>À propos</Link>
            <Link to="/projects" style={{ marginRight: "10px", color: "#fff" }}>Projets</Link>
            <Link to="/experience" style={{ marginRight: "10px", color: "#fff" }}>Expériences</Link>
            <Link to="/contact" style={{ color: "#fff" }}>Contact</Link>
        </nav>
    </>
  )
}
