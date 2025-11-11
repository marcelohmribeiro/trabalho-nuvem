"use client";

import { useGame } from "@/hooks/useGame";
import StatCard from "@/components/ui/StatCard";
import CoffeeButton from "@/components/ui/CoffeeButton";
import MultiplierDisplay from "./MultiplierDisplay";

export default function GameArea() {
  const { gameState, isLoading, clickCoffee } = useGame();

  if (isLoading) {
    return (
      <div className="flex-1 p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-2">☕</div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 p-6 space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        <StatCard
          icon="☕"
          label="Cafés servidos"
          value={gameState?.coffeeCount?.toLocaleString() || "0"}
        />
        <StatCard
          icon="💰"
          label="Moedas"
          value={gameState?.coins?.toLocaleString() || "0"}
        />
      </div>

      {/* Multiplier Display */}
      <MultiplierDisplay />

      {/* Clicker Area */}
      <div className="flex items-center justify-center py-12">
        <CoffeeButton onClick={clickCoffee} />
      </div>
    </div>
  );
}
