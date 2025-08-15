import { motion, AnimatePresence } from 'framer-motion';
import orlandoImage from '../assets/orlando.jpg';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-base-100/90"
          >
            <div className="text-center">
              <span className="loading loading-infinity loading-xl text-primary"></span>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4 text-xl font-medium text-base-content"
              >
                Chargement du portfolio...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.section
        initial="hidden"
        animate={isLoading ? "hidden" : "visible"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              when: "beforeChildren",
              staggerChildren: 0.15
            }
          }
        }}
        className="text-center py-12 flex flex-col items-center min-h-screen"
        style={{ backgroundColor: "#f0f8ff" }}
      >
        <motion.img 
          src={orlandoImage}
          variants={{
            hidden: { opacity: 0, y: 10, filter: "blur(2px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] } }
          }}
          style={{ width: "200px", height: "210px", borderRadius: "50%" }}
          alt="Photo de profil"
        />

        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 10, filter: "blur(2px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] } }
          }}
          className="text-4xl font-bold mb-6 text-gray-900 mt-1"
        >
          Bienvenue sur mon portfolio
        </motion.h1>
        
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 10, filter: "blur(2px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.16, 0.77, 0.47, 0.97] } }
          }}
          className="text-lg text-gray-600 leading-relaxed max-w-md"
        >
          Je suis étudiant passionné par le développement web et futur ingénieur.
        </motion.p>
        
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 10, filter: "blur(2px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.16, 0.77, 0.47, 0.97] } }
          }}
          className="text-lg text-gray-600 leading-relaxed max-w-md mt-2"
        >
          Pour en savoir plus,vous pouvez consulter les liens ci-dessous.
        </motion.p>

        {/* Liens en flex row */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 10, filter: "blur(2px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.2, ease: [0.16, 0.77, 0.47, 0.97] } }
          }}
          className="flex flex-row gap-6 mt-8"
        >
          <Link
            to="/about"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
          >
            À propos
          </Link>
          <Link
            to="/experience"
            className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
          >
            Expériences
          </Link>
          <Link
            to="/projects"
            className="px-4 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 transition"
          >
            Projets
          </Link>
        </motion.div>
      </motion.section>
    </>
  );
}
