import React from 'react'
import Projects3DCarousel from "../components/ProjectCard";
import meteo from "../assets/meteo.jpg";
import calculator from "../assets/calculator.jpg";
import casque from "../assets/casque.jpg"

  const myProjects = [
  {
    id: "p1",
    title: "Météo en direct 🌥️",
    image:meteo,
    liveUrl: "https://nantenaina12.github.io/meteo-vite/",
    codeUrl: "https://github.com/Nantenaina12/meteo-vite",
    tags: ["JS", "HTML", "CSS", "OpenWeather"]
  },
  {
    id: "p2",
    title: " Calculator Scientific",
    image:calculator,
    liveUrl: "https://nantenaina12.github.io/CodeAlpha_Calculator/",
    codeUrl: "https://github.com/Nantenaina12/CodeAlpha_Calculator",
    tags: ["React", "MUI", "MathJS"]
  },
  {
    id: "p3",
    title: "Portfolio React + Router",
    image:,
    liveUrl: "https://example.com/portfolio",
    codeUrl: "https://github.com/yourname/portfolio",
    tags: ["React", "Vite", "SPA"]
  },
  {
    id: "p4",
    title: "Music Player",
    image:casque,
    liveUrl: " https://nantenaina12.github.io/CodeAlpha_MusicPlayer/",
    codeUrl: "https://github.com/Nantenaina12/CodeAlpha_MusicPlayer",
    tags: ["React", "Audio", "Hooks"]
  }
];
 
 export default function Projects(){
   return (
    <div style={{ padding: 24 }}>
      <h2 style={{ marginBottom: 16 }}>Mes Projets</h2>
        <Projects3DCarousel 
      projects={myProjects}
      autoRotateMs={3000} // Rotation toutes les 3 secondes
      radius={420}        // Taille du cercle
      cardSize={{w: 360, h: 360}} // Taille des cartes
    />
    </div>
  );
 }
