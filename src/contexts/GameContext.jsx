"use client";

import { createContext, useState, useEffect, useCallback } from "react";
import { gameService } from "@/services/game";

export const GameContext = createContext();

export function GameProvider({ children }) {
  const [gameState, setGameState] = useState({
    coffeeCount: 0,
    coins: 0,
    level: 1,
    playTime: 0,
    ownedItems: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Carregar estado inicial do jogo
    async function loadInitialState() {
      try {
        const initialState = await gameService.getInitialState();
        setGameState(initialState);
      } catch (error) {
        console.error("Erro ao carregar estado inicial:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadInitialState();
  }, []);

  // Debounced save
  useEffect(() => {
    const saveTimeout = setTimeout(() => {
      if (gameState.coffeeCount > 0) {
        gameService.saveProgress(gameState);
      }
    }, 2000);

    return () => clearTimeout(saveTimeout);
  }, [gameState]);

  const clickCoffee = useCallback(() => {
    setGameState((prev) => gameService.incrementCoffee(prev));
  }, []);

  const buyProduct = useCallback(
    async (product) => {
      const result = await gameService.buyProduct(gameState, product);
      if (result.success) {
        setGameState(result.newState);
      }
      return result;
    },
    [gameState]
  );

  const updateGameState = useCallback((data) => {
    setGameState((prev) => ({ ...prev, ...data }));
  }, []);

  const clearGameState = useCallback(() => {
    const clearedState = gameService.clearState();
    setGameState(clearedState);
  }, []);

  const saveProgress = useCallback(async () => {
    return await gameService.saveProgress(gameState);
  }, [gameState]);

  const getMultipliers = useCallback(() => {
    return gameService.getMultipliers(gameState.ownedItems);
  }, [gameState.ownedItems]);

  return (
    <GameContext.Provider
      value={{
        gameState,
        isLoading,
        clickCoffee,
        buyProduct,
        updateGameState,
        clearGameState,
        saveProgress,
        getMultipliers,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
