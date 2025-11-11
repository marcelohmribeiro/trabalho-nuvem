import Parse from "@/config";

export const rankingService = {
  // Buscar ranking global
  async fetchRanking(limit = 33) {
    try {
      const query = new Parse.Query(Parse.User);
      query.descending("coffeeCount");
      query.limit(limit);
      query.select("username", "coffeeCount", "level");

      const users = await query.find();

      return {
        success: true,
        ranking: users.map((user, index) => ({
          position: index + 1,
          username: user.get("username"),
          coffeeCount: user.get("coffeeCount") || 0,
          level: user.get("level") || 1,
        })),
      };
    } catch (error) {
      console.error("Erro ao buscar ranking:", error);
      return { success: false, error: error.message };
    }
  },

  // Obter posição do usuário atual
  async getCurrentUserRank() {
    try {
      const currentUser = Parse.User.current();
      if (!currentUser) {
        throw new Error("Usuário não está logado");
      }

      await currentUser.fetch();
      const userCoffeeCount = currentUser.get("coffeeCount") || 0;

      const query = new Parse.Query(Parse.User);
      query.greaterThan("coffeeCount", userCoffeeCount);

      const count = await query.count();

      return {
        success: true,
        position: count + 1,
      };
    } catch (error) {
      console.error("Erro ao buscar posição:", error);
      return { success: false, error: error.message };
    }
  },
};
