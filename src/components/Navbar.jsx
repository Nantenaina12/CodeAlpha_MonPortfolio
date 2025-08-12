import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
        <nav className="navbar  bg-neutral text-primary-content  flex flex-row justify-around" style={{fontSize:"30px"}}>
            <Link to="/" style={{ marginRight: "10px",fontSize:"15px" }} className="btn btn-ghost ">Accueil</Link>
            <Link to="/about" style={{ marginRight: "10px",fontSize:"15px"}} className="btn btn-ghost ">À propos</Link>
            <Link to="/projects" style={{ marginRight: "10px",fontSize:"15px"}} className="btn btn-ghost ">Projets</Link>
            <Link to="/experience" style={{ marginRight: "10px",fontSize:"15px"}} className="btn btn-ghost ">Expériences</Link>
            <Link to="/contact" className="btn btn-ghost " style={{fontSize:"15px"}}>Contact</Link>
        </nav>
    </>
  )
}
