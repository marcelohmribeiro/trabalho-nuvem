"use client";

import { useAuth } from "@/hooks/useAuth";

export default function StatsGrid() {
  const { user } = useAuth();

  const stats = [
    {
      icon: "☕",
      label: "Cafés Servidos",
      value: (user?.coffeeCount || 0).toLocaleString(),
    },
    {
      icon: "💰",
      label: "Moedas",
      value: (user?.coins || 0).toLocaleString(),
    },
    {
      icon: "⏰",
      label: "Tempo de jogo",
      value: `${user?.playTime || 0} horas`,
    },
    { icon: "🏆", label: "Nível", value: user?.level || 1 },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-4 shadow-md flex items-center gap-3"
        >
          <div className="text-4xl">{stat.icon}</div>
          <div>
            <div className="text-xs text-amber-700 font-medium">
              {stat.label}
            </div>
            <div className="text-xl font-bold text-amber-900">{stat.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
