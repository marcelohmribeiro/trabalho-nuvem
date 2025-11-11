"use client";

import { useGame } from "@/hooks/useGame";

export default function BalanceCard() {
  const { gameState } = useGame();

  return (
    <div className="bg-linear-to-r from-amber-500 to-amber-600 rounded-xl p-6 text-white shadow-lg">
      <div className="flex items-center gap-4">
        <div className="text-5xl">💰</div>
        <div>
          <h2 className="text-xl font-bold">Suas moedas</h2>
          <p className="text-3xl font-bold">
            {gameState.coins.toLocaleString()} Moedas
          </p>
          <p className="text-sm opacity-90">
            Invista com sabedoria para impulsionar seu café!
          </p>
        </div>
      </div>
    </div>
  );
}
