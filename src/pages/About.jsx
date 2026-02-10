import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/PermanentSections.css';
import fst from "../assets/fst.png";
import imagefst from "../assets/imagefst.jpg";
import compétence from "../assets/compétence.png";
import soft from "../assets/soft2.png";
import cv from "../assets/ciriculum.png";

export default function About() {
  const [isLoading, setIsLoading] = useState(true);
  const [animationStage, setAnimationStage] = useState({
    section1: false,
    section2: false,
    section3: false
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationStage(p => ({ ...p, section1: true })), 300);
    const timer2 = setTimeout(() => setAnimationStage(p => ({ ...p, section2: true })), 600);
    const timer3 = setTimeout(() => setAnimationStage(p => ({ ...p, section3: true })), 900);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  // Variants pour le parent
  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  // Variants pour chaque élément enfant
  const childVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(2px)" },
    visible: {
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }
    }
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate={isLoading ? "hidden" : "visible"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { when: "beforeChildren", staggerChildren: 0.15 }
          }
        }}
        className="flex flex-col items-center justify-center text-xl px-9 py-6"
      >
        <motion.h1
          variants={childVariants}
          className="mb-1 text-2xl text-blue-950"
        >
          À propos de moi
        </motion.h1>
      </motion.div>

      {/* Bloc texte + images avec animation coordonnée */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={parentVariants}
        className="flex flex-row items-center justify-around gap-6 m-2"
      >
        {/* Texte à gauche */}
        <motion.p variants={childVariants} className="max-w-xl text-lg">
          Je suis étudiant titulaire d'un <strong>DEUST</strong> (Diplôme d'Études Universitaires en Sciences et Techniques). 
          Actuellement, je suis en 2ème Année cycle d'ingénieur en Géoinformation à la 
          <strong style={{ color: "blue" }}> Faculté des Sciences et Techniques de Tanger</strong>.
          Savez vous que la géomatique est devenue un outil qui aide à répondre aux problématiques liées aux données géographiques?
          C'est la raison pour laquelle les universités forment des géomaticiens et je fais partie. J'ai déjà appris pas mal des disciplines qui englobent la formation notamment l'acquisition, le traitement des données géographiques.Il est indéniable que l'informatique est toujours indispensable pour nous aider surtout en traitement et en restitution de l'information géographique.
        </motion.p>
        {/* Images à droite */}
        <div className="flex flex-col justify-center items-center mr-10 ">
          <motion.a
            variants={childVariants}
            href="https://fstt.ac.ma/Portail2023"
            target="_blank"
            className="lien-fst"
          >
            <img src={fst} alt="FST" className="h-40 w-60 object-contain" />
          </motion.a>

          <motion.img
            variants={childVariants}
            src={imagefst}
            alt="Image FST"
            className="h-30 w-70 rounded-xl object-cover"
          />
        </div>
      </motion.div>

      {/* Sections horizontales */}
      <div className="horizontal-sections">
        {/* Section 1 */}
        <div className={`section ${animationStage.section1 ? 'slide-to-right' : 'start-left'}`}>
          <div className="card-body py-6">
            <h2 className="card-title">Compétences Techniques</h2>
            <div className="flex flex-row gap-2 items-center">
              <div>
                <img src={compétence} className="h-40 w-90" alt="Compétences" />
              </div>
              <ul className="flex flex-col gap-2 text-xl">
                <li>PostGIS,ArcGIS,QGIS</li>
                <li>HTML, CSS, JavaScript</li>
                <li>React, TailwindCSS</li>
                <li>Python, MySQL,PostGreSql</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className={`section ${animationStage.section2 ? 'slide-to-center' : 'start-left'}`}>
          <div className="card-body py-7 text-center">
            <h2 className="card-title text-center">Soft Skills</h2>
            <div className="flex flex-row gap-2 justify-center items-center">
              <div>
                <img src={soft} className="h-50 w-80" alt="Soft skills" />
              </div>
              <ul className="flex flex-col gap-2 text-xl">
                <li>Travail en équipe</li>
                <li>Leardership</li>
                <li>Réactif</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className={`section ${animationStage.section3 ? 'slide-to-left' : 'start-left'}`}>
          <div className="flex flex-col items-center gap-2">
            <img src={cv} className="rounded-2xl h-60 w-60" alt="CV" />
            <a
             href="https://drive.google.com/uc?export=download&id=1U8HRpDaSl0lM_ij0Q3tRrWmo32-C_tRE" download className="bouton-telechargement w-60 text-center">
              Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
