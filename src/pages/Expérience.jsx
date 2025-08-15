import React from 'react'
import { useState, useEffect } from 'react';

export default function Expérience() {
    const experiences=[
        {
      id: 1,
      title: "Stage de développement frontend ",
      company: "CodeAlpha",
      period: "Août 2025",
      description: "Réalisation des mini-projets comme Calculatrice,MusicPlayer,Portfolio et Participation aux Quiz ",
      tags: ["React", "TailwindCSS", "MUI"]
    }
  ];

  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    // Animation pour afficher les cartes une par une
    const timer = setInterval(() => {
      if (visibleCards.length < experiences.length) {
        setVisibleCards(prev => [...prev, experiences[prev.length]]);
      } else {
        clearInterval(timer);
      }
    }, 500); // Délai entre chaque apparition

    return () => clearInterval(timer);
  }, [visibleCards.length]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-12">Mes expériences professionnelles</h2>
      
      <div className="space-y-6">
        {visibleCards.map((exp, index) => (
          <div 
            key={exp.id}
            className="card bg-base-100 shadow-xl transition-all duration-500 ease-in-out"
            style={{
              opacity: 0,
              animation: `fadeIn 0.5s forwards ${index * 0.3}s`
            }}
          >
            <div className="card-body">
              <h3 className="card-title text-xl">{exp.title}</h3>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-primary">{exp.company}</p>
                  <p className="text-sm text-gray-500">{exp.period}</p>
                </div>
              </div>
              <p className="mt-2">{exp.description}</p>
              <div className="card-actions justify-end mt-4">
                {exp.tags.map(tag => (
                  <div key={tag} className="badge badge-outline">{tag}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
