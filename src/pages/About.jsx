import React, { useEffect, useState } from 'react';
import '../styles/PermanentSections.css';

export default function About() {
  const [animationStage, setAnimationStage] = useState({
    section1: false,
    section2: false,
    section3: false
  });

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationStage(p => ({...p, section1: true})), 300);
    const timer2 = setTimeout(() => setAnimationStage(p => ({...p, section2: true})), 600);
    const timer3 = setTimeout(() => setAnimationStage(p => ({...p, section3: true})), 900);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <>
    <div className='flex flex-col items-center text-xl px-3 py-6'>
        <h1>À propos de moi</h1>
        <p>
        Je suis un développeur passionné, spécialisé en développement web et mobile.
        J’aime créer des applications modernes, performantes et faciles à utiliser.
        </p>

    </div>

    <div className="horizontal-sections">
      {/* Section 1: Gauche → Droite */}
      <div className={`section ${animationStage.section1 ? 'slide-to-right' : 'start-left'}`}>
        <h2>Section 1</h2>
        <p>Gauche → Droite</p>
      </div>

      {/* Section 2: Gauche → Centre */}
      <div className={`section ${animationStage.section2 ? 'slide-to-center' : 'start-left'}`}>
        <h2>Section 2</h2>
        <p>Gauche → Centre</p>
      </div>

      {/* Section 3: Gauche → Gauche */}
      <div className={`section ${animationStage.section3 ? 'slide-to-left' : 'start-left'}`}>
        <h2>Section 3</h2>
        <p>Gauche → Gauche</p>
      </div>
    </div>
    </>
  );
}