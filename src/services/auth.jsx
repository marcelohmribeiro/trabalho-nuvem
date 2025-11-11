import Parse from "@/config";

export const authService = {
  checkAuth() {
    const currentUser = Parse.User.current();
    if (!currentUser) return null;
    return {
      objectId: currentUser.id,
      username: currentUser.get("username"),
      email: currentUser.get("email"),
    };
  },

  // Login
  async login(email, password) {
    try {
      const user = await Parse.User.logIn(email, password);
      return {
        success: true,
        user: {
          objectId: user.id,
          username: user.get("username"),
          email: user.get("email"),
          sessionToken: user.getSessionToken(),
        },
      };
    } catch (error) {
      console.error("Erro no login:", error);
    }
  },

  // Registro
  async register(username, email, password) {
    try {
      const user = new Parse.User();
      user.set("username", username);
      user.set("email", email);
      user.set("password", password);

      // Campos do jogo
      user.set("coffeeCount", 0);
      user.set("coins", 0);
      user.set("level", 1);
      user.set("playTime", 0);
      user.set("ownedItems", []);

      await user.signUp();
      return {
        success: true,
        user: {
          objectId: user.id,
          username: user.get("username"),
          email: user.get("email"),
          sessionToken: user.getSessionToken(),
        },
      };
    } catch (error) {
      console.error("Erro no registro:", error);
    }
  },

  // Logout
  async logout() {
    try {
      await Parse.User.logOut();
      return { success: true };
    } catch (error) {
      console.error("Erro no logout:", error);
      return { success: false, error: error.message };
    }
  },

  // Obter dados do usuário atual
  async getCurrentUserData() {
    const currentUser = Parse.User.current();
    if (!currentUser) return null;
    try {
      await currentUser.fetch();
      return {
        id: currentUser.id,
        username: currentUser.get("username"),
        email: currentUser.get("email"),
        coffeeCount: currentUser.get("coffeeCount") || 0,
        coins: currentUser.get("coins") || 0,
        level: currentUser.get("level") || 1,
        playTime: currentUser.get("playTime") || 0,
        ownedItems: currentUser.get("ownedItems") || [],
      };
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      return null;
    }
  },

  // Atualizar dados do usuário
  async updateUserData(data) {
    const currentUser = Parse.User.current();
    if (!currentUser) {
      return { success: false, error: "Usuário não está logado" };
    }
    try {
      if (data.coffeeCount !== undefined)
        currentUser.set("coffeeCount", data.coffeeCount);
      if (data.coins !== undefined) currentUser.set("coins", data.coins);
      if (data.level !== undefined) currentUser.set("level", data.level);
      if (data.playTime !== undefined)
        currentUser.set("playTime", data.playTime);
      if (data.ownedItems !== undefined)
        currentUser.set("ownedItems", data.ownedItems);

      await currentUser.save();
      return { success: true };
    } catch (error) {
      console.error("Erro ao atualizar dados:", error);
      return { success: false, error: error.message };
    }
  },

  // Resetar senha
  async resetPassword(email) {
    try {
      await Parse.User.requestPasswordReset(email);
      return { success: true, message: "Email de recuperação enviado!" };
    } catch (error) {
      console.error("Erro ao resetar senha:", error);
      return { success: false, error: error.message };
    }
  },
};
