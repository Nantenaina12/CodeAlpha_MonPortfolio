import React, { useEffect, useState } from 'react';
import '../styles/PermanentSections.css';
import fst from "../assets/fst.png"
import imagefst from "../assets/imagefst.jpg"

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
    <div className='flex flex-col items-center text-xl px-9 py-6'>
        <h1 className='mb-2 text-2xl text-blue-950'>À propos de moi</h1>
        <p>
        Je suis étudiant titulaire d'un <strong>DEUST</strong>(Diplôme d'Etudes Universitaires en Sciences et Techniques ). Actuellement,je passe en 2ème année du cycle d'ingénieur de la filière Géoinformation à la <strong style={{color:"blue"}}>Faculté des Sciences et Techniques de Tanger</strong>.
        </p>
        <div className='flex flex-row gap-6 items-center justify-center'>
            <a className='lien-fst' href='https://fstt.ac.ma/Portail2023' target='blancket'><img className='h-50 w-100' src={fst}></img></a>
            <img src={imagefst} className='h-50' w-90></img>
        </div>
        <p>Tout ce qui concerne l'informatique m'inspire beaucoup notamment développement web car peu importe les solutions que je proposerai dans le futur en tant que futur ingénieur sera sous forme web ou bien mobile, j'adore créer des applications modernes, performantes. Je possède des capacités de résoudre des problèmes parce que je savoure les défis.
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