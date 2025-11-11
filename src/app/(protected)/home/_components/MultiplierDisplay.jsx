"use client";

import { useGame } from "@/hooks/useGame";

export default function MultiplierDisplay() {
  const { getMultipliers } = useGame();
  const multipliers = getMultipliers();

  return (
    <div className="bg-purple-100 border-2 border-purple-300 rounded-lg p-4 text-center">
      <h3 className="text-lg font-semibold text-purple-800 mb-2">
        Multiplicador Atual
      </h3>
      <div className="flex justify-center items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">☕</span>
          <span className="text-xl font-bold text-purple-900">
            +{multipliers.coffeeMultiplier}
          </span>
        </div>
        <div className="text-purple-400 font-bold text-xl">•</div>
        <div className="flex items-center gap-2">
          <span className="text-2xl">💰</span>
          <span className="text-xl font-bold text-purple-900">
            +{multipliers.coinsMultiplier}
          </span>
        </div>
      </div>
      <p className="text-sm text-purple-600 mt-2">Por clique</p>
    </div>
  );
}
