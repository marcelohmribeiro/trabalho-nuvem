import { authService } from "@/services/auth";

// Calcular multiplicadores baseados em itens comprados
function calculateMultipliers(ownedItems = []) {
  let coffeeMultiplier = 1; // Base: 1 café por clique
  let coinsMultiplier = 3; // Base: 3 moedas por clique

  ownedItems.forEach((item) => {
    if (item.bonusCoffee) coffeeMultiplier += item.bonusCoffee;
    if (item.bonusCoins) coinsMultiplier += item.bonusCoins;
  });

  return { coffeeMultiplier, coinsMultiplier };
}

export const gameService = {
  // Carregar estado inicial do jogo
  async getInitialState() {
    const userData = await authService.getCurrentUserData();
    if (userData) {
      return {
        coffeeCount: userData.coffeeCount || 0,
        coins: userData.coins || 0,
        level: userData.level || 1,
        playTime: userData.playTime || 0,
        ownedItems: userData.ownedItems || [],
      };
    }
    return {
      coffeeCount: 0,
      coins: 0,
      level: 1,
      playTime: 0,
      ownedItems: [],
    };
  },

  // Limpar estado
  clearState() {
    return {
      coffeeCount: 0,
      coins: 0,
      level: 1,
      playTime: 0,
      ownedItems: [],
    };
  },

  // Processar clique no café
  incrementCoffee(gameState) {
    const { coffeeMultiplier, coinsMultiplier } = calculateMultipliers(
      gameState.ownedItems
    );

    return {
      ...gameState,
      coffeeCount: gameState.coffeeCount + coffeeMultiplier,
      coins: gameState.coins + coinsMultiplier,
    };
  },

  // Comprar item da loja
  async buyProduct(gameState, product) {
    if (gameState.coins < product.price) {
      return { success: false, error: "Moedas insuficientes!" };
    }

    const alreadyOwned = gameState.ownedItems.some(
      (item) => item.id === product.id
    );

    if (alreadyOwned) {
      return { success: false, error: "Você já possui este item!" };
    }

    const newState = {
      ...gameState,
      coins: gameState.coins - product.price,
      ownedItems: [
        ...gameState.ownedItems,
        {
          id: product.id,
          name: product.title,
          bonusCoffee: product.bonusCoffee || 0,
          bonusCoins: product.bonusCoins || 0,
        },
      ],
    };

    await authService.updateUserData(newState);
    return { success: true, newState };
  },

  // Salvar progresso
  async saveProgress(gameState) {
    return await authService.updateUserData(gameState);
  },

  // Obter multiplicadores
  getMultipliers(ownedItems) {
    return calculateMultipliers(ownedItems);
  },
};
