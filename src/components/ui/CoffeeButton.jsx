"use client";

import { useState } from "react";

export default function CoffeeButton({ onClick }) {
  const [particles, setParticles] = useState([]);
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = (e) => {
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 100);

    // Criar partículas
    const newParticles = [];
    const particleCount = 8;
    const emojis = ["☕", "💨", "✨", "🌟"];

    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount;
      const velocity = 80 + Math.random() * 40;

      newParticles.push({
        id: Date.now() + i,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        angle,
        velocity,
      });
    }

    setParticles((prev) => [...prev, ...newParticles]);

    // Remover partículas após animação
    setTimeout(() => {
      setParticles((prev) =>
        prev.filter((p) => !newParticles.find((np) => np.id === p.id))
      );
    }, 1000);

    onClick && onClick(e);
  };

  return (
    <div className="relative flex items-center justify-center">
      <button
        onClick={handleClick}
        className={`relative w-48 h-48 rounded-full bg-linear-to-br from-amber-600 to-amber-800 shadow-2xl hover:shadow-3xl transition-all duration-200 active:scale-95 flex items-center justify-center text-8xl ${
          isPressed ? "scale-95" : "scale-100"
        }`}
      >
        ☕
      </button>

      {/* Partículas */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => {
          const deltaX = Math.cos(particle.angle) * particle.velocity;
          const deltaY = Math.sin(particle.angle) * particle.velocity - 50;

          return (
            <div
              key={particle.id}
              className="absolute left-1/2 top-1/2 text-3xl animate-particle"
              style={{
                "--deltaX": `${deltaX}px`,
                "--deltaY": `${deltaY}px`,
                animation: "particleFloat 1s ease-out forwards",
              }}
            >
              {particle.emoji}
            </div>
          );
        })}
      </div>
    </div>
  );
}
