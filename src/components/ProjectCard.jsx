import React, { useEffect, useMemo, useRef, useState } from "react";

export default function Projects3DCarousel({
  projects,
  radius = 420,
  autoRotateMs = 3000, // Rotation toutes les 3 secondes
  cardSize = { w: 360, h: 360 },
}) {
  const data = Array.isArray(projects) && projects.length > 0 ? projects : [];
  const n = data.length;

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef(null);

  const stepDeg = useMemo(() => 360 / n, [n]);

  // Rotation automatique
  useEffect(() => {
    if (paused || n <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % n);
    }, autoRotateMs);
    return () => clearInterval(timer);
  }, [paused, n, autoRotateMs]);

  function next() {
    setIndex((i) => (i + 1) % n);
  }
  function prev() {
    setIndex((i) => (i - 1 + n) % n);
  }

  const css = `
    .p3d-scene {
      perspective: 1200px;
      width: 100%;
      display: grid;
      place-items: center;
    }
    .p3d-wrap {
      position: relative;
      width: min(100%, ${cardSize.w * 1.25}px);
      height: ${cardSize.h * 1.25}px;
    }
    .p3d-ring {
      position: absolute;
      inset: 0;
      transform-style: preserve-3d;
      transition: transform 900ms cubic-bezier(.22,.61,.36,1);
    }
    .p3d-card {
      position: absolute;
      top: 50%;
      left: 50%;
      transform-style: preserve-3d;
      width: ${cardSize.w}px;
      height: ${cardSize.h}px;
      margin: -${cardSize.h / 2}px 0 0 -${cardSize.w / 2}px;
      border-radius: 18px;
      overflow: flou;
      box-shadow: 0 12px 30px rgba(0,0,0,.18);
      background: #0f172a;
      color: #e2e8f0;
      border: 1px solid rgba(148,163,184,.18);
    }
    .p3d-card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
    }
    .p3d-card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      pointer-events: none;
      border-radius: 18px;
    }
    .p3d-card::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(2,6,23,.66), rgba(2,6,23,0) 55%);
      pointer-events: none;
      border-radius: 18px;
    }
    .p3d-content {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 14px 14px 12px;
      display: grid;
      gap: 8px;
      z-index: 10;
      transform: translateZ(20px);
      border-radius: 18px;
    }
    .p3d-title {
      font-size: 16px;
      font-weight: 700;
      letter-spacing: .2px;
      -webkit-font-smoothing: antialiased;
    }
    .p3d-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }
    .p3d-tag {
      font-size: 12px;
      opacity: .9;
      padding: 2px 8px;
      border-radius: 999px;
      background: rgba(148,163,184,.16);
      border: 1px solid rgba(148,163,184,.18);
      -webkit-font-smoothing: antialiased;
    }
    .p3d-cta {
      display: flex;
      gap: 8px;
      isolation: isolate;
    }
    .p3d-btn {
      font-size: 13px;
      font-weight: 600;
      padding: 8px 10px;
      border-radius: 12px;
      border: 1px solid rgba(148,163,184,.25);
      background: rgba(148,163,184,.08);
      color: #e2e8f0;
      transition: all 0.2s ease-out;
      text-decoration: none;
      cursor: pointer;
      transform: translateZ(10px);
      -webkit-font-smoothing: antialiased;
      backface-visibility: hidden;
      filter: none;
      text-shadow: 0 0 1px rgba(0,0,0,0.3);
    }
    .p3d-btn:hover {
      transform: translateZ(10px) translateY(-1px);
      background: rgba(148,163,184,.14);
    }
    .p3d-controls {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      pointer-events: none;
      z-index: 5;
    }
    .p3d-arrow {
      pointer-events: all;
      width: 42px;
      height: 42px;
      border-radius: 999px;
      display: grid;
      place-items: center;
      border: 1px solid rgba(148,163,184,.25);
      background: rgba(2,6,23,.55);
      color: #e2e8f0;
      font-weight: 700;
      cursor: pointer;
      backdrop-filter: blur(6px);
      transform: translateZ(30px);
    }
    .p3d-dots {
      position: absolute;
      bottom: -22px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 8px;
    }
    .p3d-dot {
      width: 8px;
      height: 8px;
      border-radius: 999px;
      background: rgba(148,163,184,.35);
      cursor: pointer;
    }
    .p3d-dot.active {
      background: #e2e8f0;
    }

  `;

  return (
    <div
      className="p3d-scene"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      ref={containerRef}
    >
      <style>{css}</style>
      <div className="p3d-wrap">
        <div
          className="p3d-ring"
          style={{ transform: `translateZ(-${radius}px) rotateY(${-index * stepDeg}deg)` }}
        >
          {data.map((p, i) => {
            const angle = i * stepDeg;
            const isActive = i === index;
            return (
              <article
                key={p.id || i}
                className="p3d-card"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px) ${isActive ? "scale(1.02)" : "scale(0.96)"}`,
                  outline: isActive ? "2px solid rgba(255,255,255,.15)" : "none",
                }}
                onClick={(e) => {
                  if (e.target === e.currentTarget) {
                    setIndex(i);
                  }
                }}
              >
                <div className="p3d-card-inner">
                  {p.image && <img src={p.image} alt={p.title} loading="lazy" />}
                  <div className="p3d-content">
                    <div className="p3d-title">{p.title}</div>
                    {p.tags?.length > 0 && (
                      <div className="p3d-tags">
                        {p.tags.map((tag, k) => (
                          <span key={k} className="p3d-tag">{tag}</span>
                        ))}
                      </div>
                    )}
                    {(p.liveUrl || p.codeUrl) && (
                      <div className="p3d-cta">
                        {p.liveUrl && (
                          <a
                            className="p3d-btn"
                            href={p.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Live
                          </a>
                        )}
                        {p.codeUrl && (
                          <a
                            className="p3d-btn"
                            href={p.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Code
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="p3d-controls">
          <button className="p3d-arrow" onClick={prev}>‹</button>
          <button className="p3d-arrow" onClick={next}>›</button>
        </div>

        <div className="p3d-dots">
          {data.map((_, i) => (
            <button
              key={i}
              className={`p3d-dot ${i === index ? 'active' : ''}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}