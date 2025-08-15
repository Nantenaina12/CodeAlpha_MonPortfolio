import React from 'react'
import Projects3DCarousel from "../components/ProjectCard";
import meteo from "../assets/meteo.jpg";
import calculator from "../assets/calculator.jpg";
import casque from "../assets/casque.jpg";
import chrono from "../assets/chrono.png";
import carte from "../assets/carte.png";
import quiz from "../assets/quiz.png";

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
    title: "Pomodoro-Timer",
    image:chrono,
    liveUrl: "https://nantenaina12.github.io/pomodoro/",
    codeUrl: "https://github.com/Nantenaina12/pomodoro",
    tags: ["HTML", "CSS", "JS"]
  },
   {
    id: "p4",
    title: "Music Player",
    image:casque,
    liveUrl: " https://nantenaina12.github.io/CodeAlpha_MusicPlayer/",
    codeUrl: "https://github.com/Nantenaina12/CodeAlpha_MusicPlayer",
    tags: ["TailwindCSS", "Rect", "API n point"]
  },
   {
    id: "p5",
    title: "Quiz",
    image:quiz,
    liveUrl: "https://nantenaina12.github.io/Quiz_complet/",
    codeUrl: "https://github.com/Nantenaina12/Quiz_complet",
    tags: ["HTML", "CSS", "JS"]
  },
  {
     id: "p6",
    title: "Carte interactive de la région Laâyoune",
    image:carte,
    liveUrl: "https://try.geo.software/adws/app/c5fc978b-34d1-11f0-8a6b-7331df7a9bc3",
    tags: ["GéoAcademie", "GéoGénérateur"]
  }
 

];
 
 export default function Projects(){
   return (
    <div style={{ padding:10,backgroundColor: "#f0f8ff",height:"100vh"}}>
      <h2 style={{ marginBottom: 10,fontSize:20, textAlign:'center'}}>Découvrez ici les projets que j'ai déjà réalisés.</h2>
       <h3 className='text-center'>Appuez sur Live pour que vous puissiez voir comment fonctionne chaque projet.</h3>
    <h3 className='text-center'>Cliquez sur Code si vous voulez explorer le code source.</h3>
        <Projects3DCarousel 
      projects={myProjects}
      autoRotateMs={3000} // Rotation toutes les 3 secondes
      radius={420}        // Taille du cercle
      cardSize={{w: 360, h: 360}} // Taille des cartes
     />
    </div>
  );
 }
